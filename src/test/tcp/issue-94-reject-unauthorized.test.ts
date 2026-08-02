import 'reflect-metadata'
import * as fs from 'fs'
import * as path from 'path'
import * as tls from 'tls'
import { SessionContainer } from '../../runtime'
import { DITokens } from '../../runtime/di-tokens'
import { IJsFixConfig } from '../../config'
import { ISessionDescription } from '../../transport'
import { TcpInitiator } from '../../transport/tcp/tcp-initiator'

/**
 * Reproduction for https://github.com/TimelordUK/jspurefix/issues/94
 *
 * TcpInitiator.tlsDuplex() unconditionally rejected the connection whenever
 * `tlsSocket.authorized` was false - regardless of what `rejectUnauthorized` was set to in the
 * caller's TLS connection options. This made `rejectUnauthorized: false` a no-op: there was no
 * way to connect to a counterparty presenting a self-signed / privately-issued certificate we
 * can't otherwise verify, even though that is exactly what `rejectUnauthorized: false` is for.
 *
 * Also covers https://github.com/TimelordUK/jspurefix/issues/151 - the same flag set under
 * `tls` rather than `tls.nodeTlsConnectionOptions` used to be dropped by the options factory.
 */

const fixtures = path.join(__dirname, 'fixtures')
const selfSignedKey = fs.readFileSync(path.join(fixtures, 'self-signed.key'))
const selfSignedCert = fs.readFileSync(path.join(fixtures, 'self-signed.crt'))

type Placement = 'nodeTlsConnectionOptions' | 'tls'

async function withSelfSignedTlsServer<T> (fn: (port: number) => Promise<T>): Promise<T> {
  const server = tls.createServer({ key: selfSignedKey, cert: selfSignedCert }, (socket) => {
    socket.end()
  })
  await new Promise<void>((resolve) => { server.listen(0, '127.0.0.1', resolve) })
  const address = server.address()
  const port = typeof address === 'object' && address !== null ? address.port : 0
  try {
    return await fn(port)
  } finally {
    await new Promise<void>((resolve) => { server.close(() => { resolve() }) })
  }
}

async function makeConfig (port: number, rejectUnauthorized: any, placement: Placement): Promise<IJsFixConfig> {
  const tlsSection = placement === 'tls'
    ? { rejectUnauthorized }
    : { nodeTlsConnectionOptions: { rejectUnauthorized } }
  const description: ISessionDescription = {
    application: {
      type: 'initiator',
      name: 'issue_94_test',
      protocol: 'ascii',
      dictionary: 'repo44',
      tcp: {
        host: '127.0.0.1',
        port,
        tls: tlsSection
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

async function connectExpectingSuccess (rejectUnauthorized: any, placement: Placement): Promise<void> {
  await withSelfSignedTlsServer(async (port) => {
    const config = await makeConfig(port, rejectUnauthorized, placement)
    const initiator = new TcpInitiator(config)
    await expect(initiator.connect(5)).resolves.toBeDefined()
    initiator.end()
  })
}

async function connectExpectingCertRejection (rejectUnauthorized: any, placement: Placement): Promise<void> {
  await withSelfSignedTlsServer(async (port) => {
    const config = await makeConfig(port, rejectUnauthorized, placement)
    const initiator = new TcpInitiator(config)
    // assert on the certificate error specifically - `rejects.toBeDefined()` would also be
    // satisfied by repeatConnect's generic timeout, which is precisely the failure mode that
    // made #94 hard to diagnose in the first place.
    await expect(initiator.connect(1)).rejects.toEqual(
      expect.objectContaining({
        message: expect.stringMatching(/SELF_SIGNED_CERT|SELF-SIGNED|UNABLE_TO_VERIFY/i)
      })
    )
  })
}

describe('issue #94 - TcpInitiator ignores rejectUnauthorized: false', () => {
  it('connects to a self-signed-cert peer when rejectUnauthorized is false', async () => {
    await connectExpectingSuccess(false, 'nodeTlsConnectionOptions')
  }, 20000)

  it('still rejects a self-signed-cert peer when rejectUnauthorized is true (default security preserved)', async () => {
    await connectExpectingCertRejection(true, 'nodeTlsConnectionOptions')
  }, 20000)

  it('still rejects a self-signed-cert peer when rejectUnauthorized is not set at all', async () => {
    await connectExpectingCertRejection(undefined, 'nodeTlsConnectionOptions')
  }, 20000)
})

describe('issue #151 - rejectUnauthorized under tls{} is honoured for initiators', () => {
  it('connects when rejectUnauthorized false is set directly under tls', async () => {
    await connectExpectingSuccess(false, 'tls')
  }, 20000)

  it('still rejects when rejectUnauthorized true is set directly under tls', async () => {
    await connectExpectingCertRejection(true, 'tls')
  }, 20000)

  it('treats a quoted "false" from hand written json as false', async () => {
    // the config suggested in the #94 thread quoted the flag; node would treat the string as
    // truthy and enforce verification, i.e. silently the opposite of what was asked for.
    await connectExpectingSuccess('false', 'tls')
  }, 20000)
})
