import { IJsFixLogger } from './js-fix-logger'

export abstract class JsFixLoggerFactory {
  public abstract logger (type: string): IJsFixLogger
  public abstract plain (fileName: string, maxSize?: number): IJsFixLogger
}
