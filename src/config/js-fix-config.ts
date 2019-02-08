import { FixDefinitions } from '../dictionary'
import { ISessionDescription, ISessionMsgFactory } from '../transport'
import { JsFixLoggerFactory } from './js-fix-logger-factory'
import { EmptyLogFactory } from './empty-log-factory'
import { AsciiChars } from '../buffer'

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
               public readonly delimiter: number = AsciiChars.Soh,
               public readonly logFactory: JsFixLoggerFactory = new EmptyLogFactory()) {
  }
}
