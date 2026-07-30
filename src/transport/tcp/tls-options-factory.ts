import { ConnectionOptions, TlsOptions } from 'tls'
import { ITlsOptions } from './tls-options'
import { ITcpTransportDescription } from './tcp-transport-description'
const path = require('path')
const fs = require('fs')

export class TlsOptionsFactory {
  /*
     session descriptions are routinely hand written json, where a boolean flag is easily
     quoted by mistake i.e. "rejectUnauthorized": "false".  node treats that string as truthy
     and so does exactly the opposite of what was intended, silently.  accept the two string
     spellings rather than inverting the caller's meaning - anything else is left alone so it
     shows up as an obviously wrong value rather than being guessed at.
   */
  static asBoolean (value: any): any {
    if (typeof value === 'string') {
      const lowered = value.toLowerCase()
      if (lowered === 'true') return true
      if (lowered === 'false') return false
    }
    return value
  }

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
        requestCert: TlsOptionsFactory.asBoolean(tls.requestCert),
        rejectUnauthorized: TlsOptionsFactory.asBoolean(tls.rejectUnauthorized)
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
      // https://github.com/TimelordUK/jspurefix/issues/151 - ITlsOptions declares these and
      // getTlsOptions honours them on the server path, so map them here too rather than making
      // nodeTlsConnectionOptions the only spelling that works for an initiator.  Applied before
      // the spread below so an explicit nodeTlsConnectionOptions value still wins.
      if (tls.requestCert !== undefined) {
        connectionOptions.requestCert = TlsOptionsFactory.asBoolean(tls.requestCert)
      }
      if (tls.rejectUnauthorized !== undefined) {
        connectionOptions.rejectUnauthorized = TlsOptionsFactory.asBoolean(tls.rejectUnauthorized)
      }
      if (tls.nodeTlsConnectionOptions) {
        connectionOptions = {
          ...connectionOptions,
          ...tls.nodeTlsConnectionOptions
        }
        if (connectionOptions.rejectUnauthorized !== undefined) {
          connectionOptions.rejectUnauthorized = TlsOptionsFactory.asBoolean(connectionOptions.rejectUnauthorized)
        }
        if (connectionOptions.requestCert !== undefined) {
          connectionOptions.requestCert = TlsOptionsFactory.asBoolean(connectionOptions.requestCert)
        }
      }
    }
    return connectionOptions
  }
}
