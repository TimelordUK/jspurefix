/**
 * structured fields carried alongside a log message.
 *
 * two kinds travel through the same shape.  *context* is bound once when a logger is made
 * and repeats on every line it writes - the component, the application, the counterparty.
 * *fields* are supplied per call and carry a value worth aggregating on - a msgType, a
 * sequence number, a byte count.
 *
 * they are deliberately kept as a bag rather than spread into the log record, so a caller
 * passing { message: ... } cannot clobber the real message, and so the choice of how to
 * render them belongs to the formatter rather than the engine.  see
 * docs/instrumentation.md.
 */
export type JsFixLogFields = Record<string, unknown>

export interface IJsFixLogger {
  info: (message: string, fields?: JsFixLogFields) => void
  warning: (message: string, fields?: JsFixLogFields) => void
  debug: (message: string, fields?: JsFixLogFields) => void
  error: (e: Error, fields?: JsFixLogFields) => void
}

export class EmptyLogger implements IJsFixLogger {
  constructor (public readonly type: string = '') {
  }

  public info (_: string, __?: JsFixLogFields): void {
    // nothing
  }

  public warning (_: string, __?: JsFixLogFields): void {
    // nothing
  }

  public debug (_: string, __?: JsFixLogFields): void {
    // nothing
  }

  public error (_: Error, __?: JsFixLogFields): void {
    // nothing
  }
}

export function makeEmptyLogger (type: string): IJsFixLogger {
  return new EmptyLogger(type)
}
