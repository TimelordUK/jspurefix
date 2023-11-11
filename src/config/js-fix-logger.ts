export interface IJsFixLogger {
  info: (message: string) => void
  warning: (message: string) => void
  debug: (message: string) => void
  error: (e: Error) => void
}

export class EmptyLogger implements IJsFixLogger {
  constructor (public readonly type: string = '') {
  }

  public info (_: string): void {
    // nothing
  }

  public warning (_: string): void {
    // nothing
  }

  public debug (_: string): void {
    // nothing
  }

  // eslint-disable-next-line n/handle-callback-err
  public error (_: Error): void {
    // nothing
  }
}

export function makeEmptyLogger (type: string): IJsFixLogger {
  return new EmptyLogger(type)
}
