export interface IFixClock {
  now (): Date
}

export class DefaultFixClock implements IFixClock {
  now (): Date {
    return new Date()
  }
}
