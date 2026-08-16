import { IJsFixLogger, JsFixLogFields } from './js-fix-logger'

export abstract class JsFixLoggerFactory {
  /**
   * @param type the legacy display name, e.g. 'me:peer:FixSession'.  it is what the
   * console format renders between brackets, so it is passed verbatim and unchanged
   * @param context fields bound to every line this logger writes.  an implementation
   * written before this argument existed keeps compiling and simply ignores it
   */
  public abstract logger (type: string, context?: JsFixLogFields): IJsFixLogger
  public abstract plain (fileName: string, maxSize?: number): IJsFixLogger
}
