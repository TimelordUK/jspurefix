import { ConnectionOptions, TlsOptions } from 'tls'
import { ITlsOptions } from './tls-options'
import { ITcpTransportDescription } from './tcp-transport-description'
const path = require('path')
const fs = require('fs')

export class TlsOptionsFactory {
  static read (filePath: string) {
    const root: string = path.join(__dirname, '../../../')
    const fullPath = path.join(root, filePath)
    return fs.readFileSync(fullPath,
      {
        encoding: 'utf8', flag: 'r'
      })
  }

  static getTlsOptions (tls: ITlsOptions): TlsOptions {
    let tlsOptions: TlsOptions = null
    if (tls) {
      tlsOptions = {
        requestCert: tls.requestCert,
        rejectUnauthorized: tls.rejectUnauthorized
      } as TlsOptions

      if (tls.key) {
        tlsOptions.key = TlsOptionsFactory.read(tls.key)
        tlsOptions.cert = TlsOptionsFactory.read(tls.cert)
      }

      if (tls.ca && tls.ca.length > 0) {
        tlsOptions.ca = tls.ca.map(i => TlsOptionsFactory.read(i))
      }
    }
    if (tls.nodeTlsServerOptions) {
      tlsOptions = {
        ...tlsOptions,
        ...tls.nodeTlsServerOptions,
      }
    }
    return tlsOptions
  }

  static getTlsConnectionOptions (tcp: ITcpTransportDescription): ConnectionOptions {
    let connectionOptions: ConnectionOptions = null
    const tls = tcp.tls
    if (tls) {
      connectionOptions = {
        port: tcp.port,
        host: tcp.host
      } as ConnectionOptions
      if (tls.key) {
        connectionOptions.key = TlsOptionsFactory.read(tcp.tls.key)
        connectionOptions.cert = TlsOptionsFactory.read(tcp.tls.cert)
      }
      if (tcp.tls.ca && tcp.tls.ca.length > 0) {
        connectionOptions.ca = tcp.tls.ca.map(i => TlsOptionsFactory.read(i))
      }
      if (tcp.tls.timeout) {
        connectionOptions.timeout = tcp.tls.timeout
      }
      if (tcp.tls.sessionTimeout) {
        connectionOptions.sessionTimeout = tcp.tls.sessionTimeout
      }
    }
    if (tls.nodeTlsConnectionOptions) {
      connectionOptions = {
        ...connectionOptions,
        ...tls.nodeTlsConnectionOptions,
      }
    }
    return connectionOptions
  }
}
