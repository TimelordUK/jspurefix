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
  public tcp: ITcpTransportDescription | null
  public state: InitiatorState = InitiatorState.Idle
  private readonly logger: IJsFixLogger
  private duplex: FixDuplex
  private th: Timeout | null = null

  constructor (@inject(DITokens.IJsFixConfig) public readonly jsFixConfig: IJsFixConfig) {
    super(jsFixConfig.description.application ?? null)
    const name = this.application?.name ?? 'initiator'
    this.logger = jsFixConfig.logFactory.logger(`${name}:TcpInitiator`)
    if (!this.application) {
      throw new Error('no application in session description.')
    }
    this.tcp = this.application.tcp ?? null
    if (!this.tcp) {
      throw new Error('no tcp in session description need tcp { host: hostname, port: port }')
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

  public async connect (timeoutSeconds: number): Promise<MsgTransport> {
    return await new Promise<MsgTransport>(async (resolve, reject) => {
      switch (this.state) {
        case InitiatorState.Idle: {
          this.state = InitiatorState.Connecting
          this.logger.info(`connecting with timeout ${timeoutSeconds}`)
          this.tryConnect()
            .then((t: MsgTransport) => { resolve(t) })
            .catch((_: Error) => {
              this.repeatConnect(timeoutSeconds)
                .then((t: MsgTransport) => { resolve(t) })
                .catch((e: Error) => { reject(e) })
            })
          break
        }

        default: {
          const e: Error = new Error('connect not valid from non idle state')
          this.logger.warning(`rejecting from state ${this.state}`)
          reject(e)
        }
      }
    })
  }

  private async unsecureDuplex (): Promise<TcpDuplex> {
    const tcp = this.tcp
    return await new Promise<TcpDuplex>((resolve, reject) => {
      try {
        this.logger.info('unsecureDuplex try to connect to endPoint')
        const socket = tcp
          ? createConnection(tcp, () => {
            try {
              this.logger.info('net.createConnection cb, resolving')
              if (socket) {
                const tcpDuplex = new TcpDuplex(socket)
                resolve(tcpDuplex)
              } else {
                reject(new Error('no socket in tcp initiator'))
              }
            } catch (e) {
              reject(e)
            }
          })
          : null
        socket?.on('error', (err) => {
          reject(err)
        })
      } catch (e) {
        reject(e)
      }
    })
  }

  private async tlsDuplex (): Promise<TcpDuplex > {
    return await new Promise<TcpDuplex>((resolve, reject) => {
      let tlsSocket: TLSSocket | null = null
      const tcp = this.tcp
      const connectionOptions: ConnectionOptions | null = tcp ? TlsOptionsFactory.getTlsConnectionOptions(tcp) : null
      if (connectionOptions) {
        try {
          tlsSocket = tlsConnect(connectionOptions, () => {
            if (!tlsSocket) return null
            this.logger.info(`client connected ${tlsSocket.authorized ? 'authorized' : 'unauthorized'}`)
            if (!tlsSocket.authorized) {
              const error = tlsSocket.authorizationError
              this.logger.warning(`rejecting from state ${this.state} authorizationError ${error}`)
              tlsSocket.end()
              reject(error)
            } else {
              tlsSocket.setEncoding('utf8')
              const tlsDuplex = new TcpDuplex(tlsSocket)
              if (tcp?.tls?.enableTrace) {
                this.logger.info('enabling tls session trace')
                tlsSocket.enableTrace()
              }
              this.logger.info('tlsDuplex resolving')
              resolve(tlsDuplex)
            }
          })
          tlsSocket.on('error', (err) => {
            reject(err)
          })
        } catch (e) {
          reject(e)
        }
      }
    })
  }

  private async tryConnect (): Promise < MsgTransport > {
    return await new Promise<MsgTransport>((resolve, reject) => {
      const tcp = this.tcp
      const connectionOptions: ConnectionOptions | null = tcp ? TlsOptionsFactory.getTlsConnectionOptions(tcp) : null
      const connector = connectionOptions ? this.tlsDuplex() : this.unsecureDuplex()
      this.logger.info(`tryConnect ${tcp?.host}:${tcp?.port}`)
      connector.then(duplex => {
        this.duplex = duplex
        resolve(new MsgTransport(0, this.jsFixConfig, duplex))
      }).catch(e => {
        reject(e)
      })
    })
  }

  public clearTimer (): void {
    if (this.th) {
      clearInterval(this.th)
      this.th = null
    }
  }

  private async repeatConnect (timeoutSeconds: number): Promise < MsgTransport > {
    return await new Promise<MsgTransport>(async (resolve, reject) => {
      const application = this.application
      const promisify = util.promisify
      const timeoutPromise = promisify(setTimeout)
      const reconnectSeconds = application?.reconnectSeconds ?? 5
      let retries = 0
      let lastError: Error
      const name = application?.name ?? 'initiator'
      this.th = setInterval(() => {
        ++retries
        this.tryConnect()
          .then((t: MsgTransport) => {
            this.state = InitiatorState.Connected
            this.clearTimer()
            resolve(t)
          }).catch((e: Error) => {
            lastError = e
            this.logger.info(`${name}: retries ${retries} ${e.message}`)
          })
      }, reconnectSeconds * 1000)
      timeoutPromise(timeoutSeconds * 1000).then(() => {
        this.clearTimer()
        this.state = InitiatorState.Stopped
        const e = lastError ?? new Error(`${name}: timeout of ${timeoutSeconds} whilst connecting`)
        reject(e)
      }).catch(e => {
        reject(e)
      })
    })
  }
}
