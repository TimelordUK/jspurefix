import { ITcpTransportDescription } from '../session-description'
import { ConnectionOptions, TlsOptions } from 'tls'
const path = require('path')
const fs = require('fs')

function read (filePath: string) {
  const root: string = path.join(__dirname, '../../../')
  const fullPath = path.join(root, filePath)
  return fs.readFileSync(fullPath,
    {
      encoding: 'utf8', flag: 'r'
    })
}

export function getTlsOptions (tcp: ITcpTransportDescription): TlsOptions {
  let tlsOptions: TlsOptions = null
  if (tcp.key) {
    tlsOptions = {
      key: read(tcp.key),
      cert: read(tcp.cert),
      requestCert: tcp.requestCert,
      rejectUnauthorized: tcp.rejectUnauthorized
    } as TlsOptions
    if (tcp.ca && tcp.ca.length > 0) {
      tlsOptions.ca = tcp.ca.map(i => read(i))
    }
  }
  return tlsOptions
}

export function getTlsConnectionOptions (tcp: ITcpTransportDescription): ConnectionOptions {
  let connectionOptions: ConnectionOptions = null
  if (tcp.key) {
    connectionOptions = {
      port: tcp.port,
      host: tcp.host,
      key: read(tcp.key),
      cert: read(tcp.cert),
    } as ConnectionOptions
    if (tcp.ca && tcp.ca.length > 0) {
      connectionOptions.ca = tcp.ca.map(i => read(i))
    }
    if (tcp.timeout) {
      connectionOptions.timeout = tcp.timeout
    }
    if (tcp.sessionTimeout) {
      connectionOptions.sessionTimeout = tcp.sessionTimeout
    }
  }
  return connectionOptions
}
