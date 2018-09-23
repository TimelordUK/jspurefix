import { FixDefinitions } from '../dictionary/definition/fix-definitions'
import { ISessionDescription } from '../transport/session-description'
import { IFixMsgFactory } from '../transport/fix-msg-factory'
import { JsFixLoggerFactory } from './js-fix-logger-factory'
import { EmptyLogFactory } from './empty-log-factory'

export interface IJsFixConfig {
  factory: IFixMsgFactory
  definitions: FixDefinitions
  description: ISessionDescription
  delimiter?: number
  logFactory: JsFixLoggerFactory
}

export class JsFixConfig implements IJsFixConfig {
  constructor (
               public readonly factory: IFixMsgFactory,
               public readonly definitions: FixDefinitions,
               public readonly description: ISessionDescription,
               public readonly delimiter: number,
               public readonly logFactory: JsFixLoggerFactory = new EmptyLogFactory()) {
  }
}
