export interface IJsFixLogger {
  info (message: string): void
  warning (message: string): void
  debug (message: string): void
  error (e: Error): void
}

export class EmptyLogger implements IJsFixLogger {
  constructor (public readonly type: string = '') {
  }
  public info (message: string) {
    // nothing
  }
  public warning (message: string) {
    // nothing
  }
  public debug (message: string) {
    // nothing
  }
  public error (error: Error) {
    // nothing
  }
}

export function makeEmptyLogger (type: string) {
  return new EmptyLogger(type)
}
