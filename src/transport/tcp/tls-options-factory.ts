import { ConnectionOptions, TlsOptions } from 'tls'
import { ITlsOptions } from './tls-options'
import { ITcpTransportDescription } from './tcp-transport-description'
const path = require('path')
const fs = require('fs')

export class TlsOptionsFactory {
  static read (filePath: string): string {
    const root: string = path.join(__dirname, '../../../')
    const fullPath = path.join(root, filePath)
    return fs.readFileSync(fullPath,
      {
        encoding: 'utf8', flag: 'r'
      })
  }

  static getTlsOptions (tls: ITlsOptions): TlsOptions | null {
    let tlsOptions: TlsOptions | null = null
    if (tls) {
      tlsOptions = {
        requestCert: tls.requestCert,
        rejectUnauthorized: tls.rejectUnauthorized
      } as TlsOptions

      if (tls.key) {
        tlsOptions.key = TlsOptionsFactory.read(tls.key)
        tlsOptions.cert = tls?.cert ? TlsOptionsFactory.read(tls?.cert) : undefined
      }

      if (tls.ca && tls.ca.length > 0) {
        tlsOptions.ca = tls.ca.map(i => TlsOptionsFactory.read(i))
      }

      if (tls.nodeTlsServerOptions) {
        tlsOptions = {
          ...tlsOptions,
          ...tls.nodeTlsServerOptions
        }
      }
    }
    return tlsOptions
  }

  static getTlsConnectionOptions (tcp: ITcpTransportDescription): ConnectionOptions | null {
    let connectionOptions: ConnectionOptions | null = null
    const tls = tcp.tls
    if (tls) {
      connectionOptions = {
        port: tcp.port,
        host: tcp.host
      } as ConnectionOptions
      if (tls.key) {
        connectionOptions.key = TlsOptionsFactory.read(tcp.tls?.key ?? '')
        connectionOptions.cert = tcp.tls?.cert ? TlsOptionsFactory.read(tcp?.tls?.cert) : undefined
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
      if (tls.nodeTlsConnectionOptions) {
        connectionOptions = {
          ...connectionOptions,
          ...tls.nodeTlsConnectionOptions
        }
      }
    }
    return connectionOptions
  }
}
