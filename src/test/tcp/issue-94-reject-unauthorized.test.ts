import 'reflect-metadata'
import * as fs from 'fs'
import * as os from 'os'
import * as path from 'path'
import * as tls from 'tls'
import { execFileSync } from 'child_process'
import { SessionContainer } from '../../runtime'
import { DITokens } from '../../runtime/di-tokens'
import { IJsFixConfig } from '../../config'
import { ISessionDescription } from '../../transport'
import { TcpInitiator } from '../../transport/tcp/tcp-initiator'

/**
 * Reproduction for https://github.com/TimelordUK/jspurefix/issues/94
 *
 * TcpInitiator.tlsDuplex() unconditionally rejects the connection whenever
 * `tlsSocket.authorized` is false - regardless of what `rejectUnauthorized` was set to in the
 * caller's TLS connection options. This makes `rejectUnauthorized: false` a no-op: there is no
 * way to connect to a counterparty presenting a self-signed / privately-issued certificate we
 * can't otherwise verify, even though that is exactly what `rejectUnauthorized: false` is for.
 *
 * (Encountered for real connecting to a FIX counterparty whose certificate is issued by their own
 * private CA, whose root we don't have - `fixparser`, by contrast, sets `rejectUnauthorized:
 * false` and simply proceeds, which is the behaviour this test asserts jspurefix should match.)
 */

// Generated fresh into a temp dir rather than checked in, so no key material lives in the repo.
const certDir = fs.mkdtempSync(path.join(os.tmpdir(), 'jspurefix-issue-94-'))
const selfSignedKeyPath = path.join(certDir, 'self-signed.key')
const selfSignedCertPath = path.join(certDir, 'self-signed.crt')
execFileSync('openssl', [
  'req', '-x509', '-newkey', 'rsa:2048',
  '-keyout', selfSignedKeyPath,
  '-out', selfSignedCertPath,
  '-days', '1',
  '-nodes',
  '-subj', '/CN=localhost'
])
const selfSignedKey = fs.readFileSync(selfSignedKeyPath)
const selfSignedCert = fs.readFileSync(selfSignedCertPath)

afterAll(() => {
  fs.rmSync(certDir, { recursive: true, force: true })
})

async function withSelfSignedTlsServer<T> (fn: (port: number) => Promise<T>): Promise<T> {
  const server = tls.createServer({ key: selfSignedKey, cert: selfSignedCert }, (socket) => {
    socket.end()
  })
  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve))
  const address = server.address()
  const port = typeof address === 'object' && address !== null ? address.port : 0
  try {
    return await fn(port)
  } finally {
    await new Promise<void>((resolve) => server.close(() => resolve()))
  }
}

async function makeConfig (port: number, rejectUnauthorized: boolean): Promise<IJsFixConfig> {
  const description: ISessionDescription = {
    application: {
      type: 'initiator',
      name: 'issue_94_test',
      protocol: 'ascii',
      dictionary: 'repo44',
      tcp: {
        host: '127.0.0.1',
        port,
        tls: {
          nodeTlsConnectionOptions: {
            rejectUnauthorized
          }
        }
      }
    },
    EncryptMethod: 0,
    ResetSeqNumFlag: true,
    HeartBtInt: 30,
    SenderCompId: 'TEST_SENDER',
    TargetCompID: 'TEST_TARGET',
    BeginString: 'FIX.4.4'
  } as unknown as ISessionDescription

  const fixContainer = new SessionContainer()
  fixContainer.registerGlobal('error')
  const sessionContainer = await fixContainer.makeSystem(description)
  return sessionContainer.resolve<IJsFixConfig>(DITokens.IJsFixConfig)
}

describe('issue #94 - TcpInitiator ignores rejectUnauthorized: false', () => {
  it('connects to a self-signed-cert peer when rejectUnauthorized is false', async () => {
    await withSelfSignedTlsServer(async (port) => {
      const config = await makeConfig(port, false)
      const initiator = new TcpInitiator(config)
      // Before the fix: this rejects with DEPTH_ZERO_SELF_SIGNED_CERT despite
      // rejectUnauthorized: false. After the fix: it resolves normally.
      await expect(initiator.connect(5)).resolves.toBeDefined()
      initiator.end()
    })
  }, 8000)

  it('still rejects a self-signed-cert peer when rejectUnauthorized is true (default security preserved)', async () => {
    await withSelfSignedTlsServer(async (port) => {
      const config = await makeConfig(port, true)
      const initiator = new TcpInitiator(config)
      await expect(initiator.connect(1)).rejects.toBeDefined()
    })
  })
})
