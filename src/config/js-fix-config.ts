import { FixDefinitions } from '../dictionary/definition'
import { ISessionDescription } from '../transport/session/session-description'
import { ISessionMsgFactory } from '../transport/session/session-msg-factory'
import { JsFixLoggerFactory } from './js-fix-logger-factory'
import { EmptyLogFactory } from './empty-log-factory'
import { AsciiChars } from '../buffer/ascii/ascii-chars'
import { DependencyContainer } from 'tsyringe'
import { IFixSessionStoreFactory } from '../store/fix-session-store-factory'
import { ISessionRegistry } from '../transport/session/session-registry'

export interface IJsFixConfig {
  factory: ISessionMsgFactory | null
  definitions: FixDefinitions
  description: ISessionDescription
  delimiter?: number
  logDelimiter?: number
  logFactory: JsFixLoggerFactory
  sessionContainer: DependencyContainer
  sessionStoreFactory?: IFixSessionStoreFactory
  /**
   * Tracks the live session per SessionId.  Set by the acceptor listener so a
   * reconnecting counterparty replaces - rather than duplicates - its session.
   */
  sessionRegistry?: ISessionRegistry
}

export class JsFixConfig implements IJsFixConfig {
  public logDelimiter: number = AsciiChars.Pipe
  public sessionContainer: DependencyContainer
  public sessionStoreFactory?: IFixSessionStoreFactory
  public sessionRegistry?: ISessionRegistry
  constructor (
    public readonly factory: ISessionMsgFactory | null,
    public readonly definitions: FixDefinitions,
    public readonly description: ISessionDescription,
    public readonly delimiter: number = AsciiChars.Soh,
    public readonly logFactory: JsFixLoggerFactory = new EmptyLogFactory()) {
  }
}
