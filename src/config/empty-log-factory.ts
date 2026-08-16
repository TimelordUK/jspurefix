import { EmptyLogger, IJsFixLogger, JsFixLogFields } from './js-fix-logger'
import { JsFixLoggerFactory } from './js-fix-logger-factory'

export class EmptyLogFactory extends JsFixLoggerFactory {
  public logger (type: string, _?: JsFixLogFields): IJsFixLogger {
    return new EmptyLogger(type)
  }

  public plain (fileName: string, maxSize?: number): IJsFixLogger {
    return new EmptyLogger()
  }
}
