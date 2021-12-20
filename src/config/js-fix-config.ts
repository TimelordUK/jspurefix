import { FixDefinitions } from '../dictionary/definition'
import { ISessionDescription, ISessionMsgFactory } from '../transport'
import { JsFixLoggerFactory } from './js-fix-logger-factory'
import { EmptyLogFactory } from './empty-log-factory'
import { AsciiChars } from '../buffer/ascii/ascii-chars'

export interface IJsFixConfig {
  factory: ISessionMsgFactory
  definitions: FixDefinitions
  description: ISessionDescription
  delimiter?: number
  logDelimiter?: number
  logFactory: JsFixLoggerFactory
}

export class JsFixConfig implements IJsFixConfig {
  public logDelimiter: number = AsciiChars.Pipe
  constructor (
               public readonly factory: ISessionMsgFactory,
               public readonly definitions: FixDefinitions,
               public readonly description: ISessionDescription,
               public readonly delimiter: number = AsciiChars.Soh,
               public readonly logFactory: JsFixLoggerFactory = new EmptyLogFactory()) {
  }
}
