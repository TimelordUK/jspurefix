import { FixDefinitions } from '../dictionary/definition'
import { ISessionDescription, ISessionMsgFactory } from '../transport'
import { JsFixLoggerFactory } from './js-fix-logger-factory'
import { EmptyLogFactory } from './empty-log-factory'
import { AsciiChars } from '../buffer/ascii'
import { DependencyContainer } from 'tsyringe'

export interface IJsFixConfig {
  factory: ISessionMsgFactory | null
  definitions: FixDefinitions
  description: ISessionDescription
  delimiter?: number
  logDelimiter?: number
  logFactory: JsFixLoggerFactory
  sessionContainer: DependencyContainer
}

export class JsFixConfig implements IJsFixConfig {
  public logDelimiter: number = AsciiChars.Pipe
  public sessionContainer: DependencyContainer
  constructor (
    public readonly factory: ISessionMsgFactory | null,
    public readonly definitions: FixDefinitions,
    public readonly description: ISessionDescription,
    public readonly delimiter: number = AsciiChars.Soh,
    public readonly logFactory: JsFixLoggerFactory = new EmptyLogFactory()) {
  }
}
