
import { FixInitiator } from '../fix-initiator'
import { MsgTransport } from '../factory'

import { IJsFixConfig, IJsFixLogger } from '../../config'
import { TcpDuplex, FixDuplex } from '../duplex'

import * as util from 'util'
import { connect as tlsConnect, ConnectionOptions, TLSSocket } from 'tls'
import { createConnection } from 'net'
import Timeout = NodeJS.Timeout
import { TlsOptionsFactory } from './tls-options-factory'
import { inject, injectable } from 'tsyringe'
import { DITokens } from '../../runtime/di-tokens'
import { ITcpTransportDescription } from './tcp-transport-description'

export enum InitiatorState {
  Idle = 1,
  Connecting = 2,
  Connected = 3,
  Stopped = 4
}

@injectable()
export class TcpInitiator extends FixInitiator {
  public tcp: ITcpTransportDescription
  public state: InitiatorState = InitiatorState.Idle
  private readonly logger: IJsFixLogger
  private duplex: FixDuplex
  private th: Timeout = null

  constructor (@inject(DITokens.IJsFixConfig) public readonly jsFixConfig: IJsFixConfig) {
    super(jsFixConfig.description.application)
    this.logger = jsFixConfig.logFactory.logger(`${this.application.name}:TcpInitiator`)
    if (!this.application) {
      const e: Error = new Error(`no application in session description.`)
      this.logger.error(e)
      throw e
    }
    this.tcp = this.application.tcp
    if (!this.tcp) {
      const e = new Error(`no tcp in session description need tcp { host: hostname, port: port }`)
      this.logger.error(e)
      throw e
    }
  }

  public end (): void {
    this.clearTimer()
    switch (this.state) {
      case InitiatorState.Connected: {
        this.logger.info('end')
        this.duplex.end()
        this.state = InitiatorState.Stopped
        break
      }

      default: {
        this.logger.info(`end :state ${this.state}`)
        this.state = InitiatorState.Stopped
        break
      }
    }
  }

  public connect (timeoutSeconds: number): Promise<MsgTransport> {
    return new Promise<MsgTransport>(async (resolve, reject) => {
      switch (this.state) {
        case InitiatorState.Idle: {
          this.state = InitiatorState.Connecting
          this.logger.info(`connecting with timeout ${timeoutSeconds}`)
          this.tryConnect().then((t: MsgTransport) => resolve(t)).catch((e: Error) => {
            this.logger.error(e)
            this.repeatConnect(timeoutSeconds).then((t: MsgTransport) => resolve(t)).catch((e: Error) => reject(e))
          })
          break
        }

        default:
          const e: Error = new Error(`connect not valid from non idle state`)
          this.logger.warning(`rejecting from state ${this.state}`)
          reject(e)
      }
    })
  }

  private unsecureDuplex (): Promise<TcpDuplex> {
    const tcp = this.tcp
    return new Promise<TcpDuplex>((resolve, reject) => {
      try {
        this.logger.info(`unsecureDuplex try to connect to endPoint`)
        const socket = createConnection(tcp, () => {
          try {
            this.logger.info(`net.createConnection cb, resolving`)
            const tcpDuplex = new TcpDuplex(socket)
            resolve(tcpDuplex)
          } catch (e) {
            reject(e)
          }
        })
      } catch (e) {
        reject(e)
      }
    })
  }

  private tlsDuplex (): Promise < TcpDuplex > {
    return new Promise<TcpDuplex>((resolve, reject) => {
      let tlsSocket: TLSSocket = null
      const tcp = this.tcp
      const connectionOptions: ConnectionOptions = TlsOptionsFactory.getTlsConnectionOptions(tcp)
      if (connectionOptions) {
        try {
          tlsSocket = tlsConnect(connectionOptions, () => {
            this.logger.info(`client connected ${tlsSocket.authorized ? 'authorized' : 'unauthorized'}`)
            if (!tlsSocket.authorized) {
              const error = tlsSocket.authorizationError
              this.logger.warning(`rejecting from state ${this.state} authorizationError ${error}`)
              tlsSocket.end()
              reject(error)
            } else {
              tlsSocket.setEncoding('utf8')
              const tlsDuplex = new TcpDuplex(tlsSocket)
              if (tcp.tls.enableTrace) {
                this.logger.info(`enabling tls session trace`)
                tlsSocket.enableTrace()
              }
              this.logger.info(`tlsDuplex resolving`)
              resolve(tlsDuplex)
            }
          })
        } catch (e) {
          reject(e)
        }
      }
    })
  }

  private tryConnect (): Promise < MsgTransport > {
    return new Promise<MsgTransport>((resolve, reject) => {
      const tcp = this.tcp
      const connectionOptions: ConnectionOptions = TlsOptionsFactory.getTlsConnectionOptions(tcp)
      const connector = connectionOptions ? this.tlsDuplex() : this.unsecureDuplex()
      this.logger.info(`tryConnect ${tcp.host}:${tcp.port}`)
      connector.then(duplex => {
        this.duplex = duplex
        resolve(new MsgTransport(0, this.jsFixConfig, duplex))
      }).catch(e => {
        reject(e)
      })
    })
  }

  public clearTimer () {
    if (this .th) {
      clearInterval(this.th)
      this.th = null
    }
  }

  private repeatConnect (timeoutSeconds: number): Promise < MsgTransport > {
    return new Promise<MsgTransport>(async (resolve, reject) => {
      const application = this.application
      const promisify = util.promisify
      const timeoutPromise = promisify(setTimeout)
      let retries = 0
      this.th = setInterval(() => {
        ++retries
        this.tryConnect().then((t: MsgTransport) => {
          this.state = InitiatorState.Connected
          this.clearTimer()
          resolve(t)
        }).catch((e: Error) => {
          this.logger.info(`${application.name}: retries ${retries} ${e.message}`)
        })
      }, application.reconnectSeconds * 1000)
      timeoutPromise(timeoutSeconds * 1000).then(() => {
        this.clearTimer()
        this.state = InitiatorState.Stopped
        const e = new Error(`${application.name}: timeout of ${timeoutSeconds} whilst connecting`)
        this.logger.warning(`repeatConnect reject with message ${e.message}`)
        reject(e)
      }).catch(e => {
        this.logger.error(e)
        reject(e)
      })
    })
  }
}
