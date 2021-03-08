import { ILooseObject } from '../collections/collection'

export interface IFixReplayRecord {
  readonly object: ILooseObject
  readonly msgType: string
  readonly seqNum: number
}

export class FixReplayRecord implements IFixReplayRecord {
  constructor (public readonly object: ILooseObject,
               public readonly msgType: string,
               public readonly seqNum: number) {
  }
}
