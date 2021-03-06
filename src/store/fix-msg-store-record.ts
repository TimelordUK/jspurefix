import { ILooseObject } from '../collections/collection'

export interface IFixMsgStoreRecord {
  readonly msgType: string
  readonly timestamp: Date
  readonly seqNum: number
  obj?: ILooseObject
  readonly encoded?: string
}

export class FixMsgStoreRecord implements IFixMsgStoreRecord {
  constructor (public readonly msgType: string,
               public readonly timestamp: Date,
               public readonly seqNum: number,
               public obj?: ILooseObject,
               public readonly encoded?: string) {
  }
}
