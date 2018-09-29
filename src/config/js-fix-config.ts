import { FixDefinitions } from '../dictionary/definition/fix-definitions'
import { ISessionDescription } from '../transport/session-description'
import { ISessionMsgFactory } from '../transport/fix-msg-factory'
import { JsFixLoggerFactory } from './js-fix-logger-factory'
import { EmptyLogFactory } from './empty-log-factory'
import { Ascii } from '../buffer/ascii'

export interface IJsFixConfig {
  factory: ISessionMsgFactory
  definitions: FixDefinitions
  description: ISessionDescription
  delimiter?: number
  logFactory: JsFixLoggerFactory
}

export class JsFixConfig implements IJsFixConfig {
  constructor (
               public readonly factory: ISessionMsgFactory,
               public readonly definitions: FixDefinitions,
               public readonly description: ISessionDescription,
               public readonly delimiter: number = Ascii.Soh,
               public readonly logFactory: JsFixLoggerFactory = new EmptyLogFactory()) {
  }
}
