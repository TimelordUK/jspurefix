import { ILooseObject } from '../collections/collection'

export interface IFixResendRecord {
  readonly object: ILooseObject
  readonly msgType: string
  readonly seqNum: number
}

export class FixResendRecord implements IFixResendRecord {
  constructor (public readonly object: ILooseObject,
               public readonly msgType: string,
               public readonly seqNum: number) {
  }
}
