import 'reflect-metadata'
import * as fs from 'fs'
import * as path from 'path'
import * as tls from 'tls'
import { TlsOptionsFactory } from '../../transport/tcp/tls-options-factory'
import { ITcpTransportDescription } from '../../transport/tcp/tcp-transport-description'
import {
  describeConnectionOptions,
  describeNegotiated,
  describePeerCertificate,
  describeServerOptions
} from '../../transport/tcp/tls-diagnostics'

const fixtures = path.join(__dirname, 'fixtures')
const selfSignedKey = fs.readFileSync(path.join(fixtures, 'self-signed.key'))
const selfSignedCert = fs.readFileSync(path.join(fixtures, 'self-signed.crt'))

function tcpWith (tlsSection: any): ITcpTransportDescription {
  return { host: '127.0.0.1', port: 1234, tls: tlsSection }
}

describe('TlsOptionsFactory connection options', () => {
  it('maps rejectUnauthorized declared directly under tls (#151)', () => {
    const options = TlsOptionsFactory.getTlsConnectionOptions(tcpWith({ rejectUnauthorized: false }))
    expect(options?.rejectUnauthorized).toBe(false)
  })

  it('maps requestCert declared directly under tls', () => {
    const options = TlsOptionsFactory.getTlsConnectionOptions(tcpWith({ requestCert: true }))
    expect(options?.requestCert).toBe(true)
  })

  it('lets nodeTlsConnectionOptions win over the tls level spelling', () => {
    const options = TlsOptionsFactory.getTlsConnectionOptions(tcpWith({
      rejectUnauthorized: true,
      nodeTlsConnectionOptions: { rejectUnauthorized: false }
    }))
    expect(options?.rejectUnauthorized).toBe(false)
  })

  it('leaves rejectUnauthorized unset when the config does not mention it', () => {
    const options = TlsOptionsFactory.getTlsConnectionOptions(tcpWith({ timeout: 100 }))
    expect(options?.rejectUnauthorized).toBeUndefined()
  })

  it('reads a quoted boolean from hand written json', () => {
    const atTlsLevel = TlsOptionsFactory.getTlsConnectionOptions(tcpWith({ rejectUnauthorized: 'false' }))
    expect(atTlsLevel?.rejectUnauthorized).toBe(false)
    const atNodeLevel = TlsOptionsFactory.getTlsConnectionOptions(tcpWith({
      nodeTlsConnectionOptions: { rejectUnauthorized: 'false' }
    }))
    expect(atNodeLevel?.rejectUnauthorized).toBe(false)
  })

  it('does not invent a value for a string it cannot read as a boolean', () => {
    const options = TlsOptionsFactory.getTlsConnectionOptions(tcpWith({ rejectUnauthorized: 'nonsense' }))
    expect(options?.rejectUnauthorized).toBe('nonsense')
  })
})

describe('TlsOptionsFactory server options', () => {
  it('reads a quoted boolean on the server path too', () => {
    const options = TlsOptionsFactory.getTlsOptions({ rejectUnauthorized: 'false', requestCert: 'true' } as any)
    expect(options?.rejectUnauthorized).toBe(false)
    expect(options?.requestCert).toBe(true)
  })
})

describe('tls diagnostics', () => {
  it('reports which rejectUnauthorized value is in force', () => {
    expect(describeConnectionOptions({ host: 'h', port: 1, rejectUnauthorized: false }))
      .toContain('rejectUnauthorized false')
    expect(describeConnectionOptions({ host: 'h', port: 1 }))
      .toContain('rejectUnauthorized (default true)')
  })

  it('never renders key or certificate material', () => {
    const rendered = describeConnectionOptions({
      host: 'h',
      port: 1,
      key: selfSignedKey,
      cert: selfSignedCert,
      ca: [selfSignedCert]
    })
    expect(rendered).toContain('key supplied')
    expect(rendered).toContain('cert supplied')
    expect(rendered).toContain('ca 1')
    expect(rendered).not.toContain('PRIVATE KEY')
    expect(rendered).not.toContain('BEGIN CERTIFICATE')
  })

  it('renders server options without key material', () => {
    const rendered = describeServerOptions({ key: selfSignedKey, cert: selfSignedCert })
    expect(rendered).toContain('key supplied')
    expect(rendered).not.toContain('PRIVATE KEY')
  })

  it('describes a live handshake and the peer certificate identity', async () => {
    const server = tls.createServer({ key: selfSignedKey, cert: selfSignedCert }, (s) => s.end())
    await new Promise<void>((resolve) => { server.listen(0, '127.0.0.1', resolve) })
    const address = server.address()
    const port = typeof address === 'object' && address !== null ? address.port : 0
    try {
      const socket = await new Promise<tls.TLSSocket>((resolve, reject) => {
        const s = tls.connect({ host: '127.0.0.1', port, rejectUnauthorized: false }, () => { resolve(s) })
        s.on('error', reject)
      })
      const negotiated = describeNegotiated(socket)
      expect(negotiated).toMatch(/protocol TLSv1\.[23]/)
      expect(negotiated).toContain('authorized false')
      expect(negotiated).toContain('authorizationError')

      const peer = describePeerCertificate(socket)
      expect(peer).toContain('subject localhost')
      expect(peer).toContain('issuer localhost')
      expect(peer).toContain('san')
      expect(peer).not.toContain('BEGIN CERTIFICATE')
      socket.end()
    } finally {
      await new Promise<void>((resolve) => { server.close(() => { resolve() }) })
    }
  }, 20000)
})
