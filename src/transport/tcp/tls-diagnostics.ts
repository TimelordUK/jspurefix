import { ConnectionOptions, TLSSocket, TlsOptions } from 'tls'

/*
   tls failures are routinely reported as "it just times out" - see issues #94 and #151.  the
   session either connects or it does not, and nothing in the log says which options were
   actually applied or what the peer presented.  enableTrace exists but is node's raw handshake
   trace: all or nothing, written to stderr rather than through IJsFixLogger.

   these helpers render the small number of facts needed to diagnose a handshake, and are
   deliberately conservative about what they include - never key material, never a full
   certificate, only the identifying fields of one.
 */

function describeCommonOptions (options: ConnectionOptions | TlsOptions): string[] {
  const parts: string[] = []
  // presence only - the values are private keys and certificate bodies.
  parts.push(`key ${options.key ? 'supplied' : 'none'}`)
  parts.push(`cert ${options.cert ? 'supplied' : 'none'}`)
  const ca = options.ca
  const caCount = Array.isArray(ca) ? ca.length : (ca ? 1 : 0)
  parts.push(`ca ${caCount}`)
  // the whole point of #94/#151 - make it unambiguous which value won.
  parts.push(`rejectUnauthorized ${String(options.rejectUnauthorized ?? '(default true)')}`)
  parts.push(`requestCert ${String(options.requestCert ?? '(default false)')}`)
  if (options.minVersion) parts.push(`minVersion ${options.minVersion}`)
  if (options.maxVersion) parts.push(`maxVersion ${options.maxVersion}`)
  return parts
}

export function describeConnectionOptions (options: ConnectionOptions): string {
  const parts: string[] = [`host ${options.host ?? '?'}`, `port ${options.port ?? '?'}`]
  if (options.servername) parts.push(`servername ${options.servername}`)
  return parts.concat(describeCommonOptions(options)).join(', ')
}

export function describeServerOptions (options: TlsOptions): string {
  return describeCommonOptions(options).join(', ')
}

/*
   what the handshake actually negotiated.  the maintainer's suggestion in #94 was to reproduce
   the connection in powershell to see the negotiated suite - this puts the same facts in our
   own log instead.
 */
export function describeNegotiated (socket: TLSSocket): string {
  const parts: string[] = []
  parts.push(`protocol ${socket.getProtocol() ?? 'none'}`)
  const cipher = socket.getCipher()
  parts.push(`cipher ${cipher ? `${cipher.name} (${cipher.version})` : 'none'}`)
  parts.push(`authorized ${socket.authorized}`)
  if (!socket.authorized && socket.authorizationError) {
    parts.push(`authorizationError ${String(socket.authorizationError)}`)
  }
  return parts.join(', ')
}

/*
   identifying fields of the peer certificate only.  getPeerCertificate() returns the full DER
   in .raw plus the public key - none of that belongs in a log, so pick fields explicitly.
 */
export function describePeerCertificate (socket: TLSSocket): string {
  const cert = socket.getPeerCertificate(false)
  if (!cert || Object.keys(cert).length === 0) {
    return 'peer presented no certificate'
  }
  const subject = cert.subject ? (cert.subject.CN ?? JSON.stringify(cert.subject)) : '?'
  const issuer = cert.issuer ? (cert.issuer.CN ?? JSON.stringify(cert.issuer)) : '?'
  const parts: string[] = [
    `subject ${subject}`,
    `issuer ${issuer}`,
    `valid ${cert.valid_from ?? '?'} to ${cert.valid_to ?? '?'}`
  ]
  if (cert.subjectaltname) parts.push(`san ${cert.subjectaltname}`)
  if (cert.fingerprint256) parts.push(`sha256 ${cert.fingerprint256}`)
  return parts.join(', ')
}
