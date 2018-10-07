import { IJsFixConfig } from '../config/js-fix-config'
import * as events from 'events'
import { IJsFixLogger } from '../config/js-fix-logger'
import { FixSessionState } from './fix-session-state'

export abstract class FixSession {
  public logReceivedMsgs: boolean = false
  public manageSession: boolean = true
  public checkMsgIntegrity: boolean = false
  protected readonly me: string
  protected readonly initiator: boolean
  protected readonly acceptor: boolean
  protected readonly sessionState: FixSessionState
  protected readonly emitter: events.EventEmitter
  protected readonly sessionLogger: IJsFixLogger

  protected constructor (public readonly config: IJsFixConfig) {
    const description = config.description
    this.emitter = new events.EventEmitter()
    this.me = description.application.name
    this.sessionState = new FixSessionState(description.HeartBtInt)
    this.sessionLogger = config.logFactory.logger(`${this.me}:FixSession`)
    this.initiator = description.application.type === 'initiator'
    this.acceptor = !this.initiator
    this.checkMsgIntegrity = this.acceptor
    this.sessionState.compId = description.SenderCompId
  }
}
