import { MsgTransport } from '../msg-transport'
import { ITcpTransportDescription } from '../session-description'
import { FixInitiator } from '../fix-initiator'
import { IJsFixConfig } from '../../config/js-fix-config'
import { IJsFixLogger } from '../../config/js-fix-logger'
import { TcpDuplex } from './tcp-duplex'
import { FixDuplex } from '../duplex/fix-duplex'

import * as util from 'util'
import * as net from 'net'

export enum InitiatorState {
  Idle = 1,
  Connecting = 2,
  Connected = 3,
  Stopped = 4
}

export class TcpInitiator extends FixInitiator {
  public tcp: ITcpTransportDescription
  public state: InitiatorState = InitiatorState.Idle
  private readonly logger: IJsFixLogger
  private duplex: FixDuplex

  constructor (public readonly jsFixConfig: IJsFixConfig) {
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
    switch (this.state) {
      case InitiatorState.Connected: {
        this.logger.info('end')
        this.duplex.end()
        this.state = InitiatorState.Stopped
        break
      }

      default: {
        this.logger.info(`end :state ${this.state}`)
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

  private tryConnect (): Promise<MsgTransport> {
    return new Promise<MsgTransport>((resolve, reject) => {
      const tcp = this.tcp
      this.logger.info(`tryConnect ${tcp.host}:${tcp.port}`)
      const socket = net.createConnection(tcp, () => {
        this.logger.info(`net.createConnection cb, resolving`)
        this.duplex = new TcpDuplex(socket)
        resolve(new MsgTransport(0, this.jsFixConfig, this.duplex))
      })
      socket.on('error', (e) => {
        reject(e)
      })
    })
  }

  private repeatConnect (timeoutSeconds: number): Promise<MsgTransport> {
    return new Promise<MsgTransport>(async (resolve, reject) => {
      const application = this.application
      const promisify = util.promisify
      const timeoutPromise = promisify(setTimeout)
      let retries = 0
      let timer = setInterval(() => {
        ++retries
        this.tryConnect().then((t: MsgTransport) => {
          this.state = InitiatorState.Connected
          clearInterval(timer)
          resolve(t)
        }).catch((e: Error) => {
          this.logger.info(`${application.name}: retries ${retries} ${e.message}`)
        })
      }, application.reconnectSeconds * 1000)
      timeoutPromise(timeoutSeconds * 1000).then(() => {
        clearInterval(timer)
        this.state = InitiatorState.Stopped
        const e = new Error(`${application.name}: timeout of ${timeoutSeconds} whilst connecting`)
        this.logger.warning(`repeatConnect reject with message ${e.message}`)
        reject(e)
      })
    })
  }
}
