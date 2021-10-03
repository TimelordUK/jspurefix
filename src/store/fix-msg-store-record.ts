import { ILooseObject } from '../collections/collection'

export interface IFixMsgStoreRecord {
  readonly msgType: string
  readonly timestamp: Date
  readonly seqNum: number
  obj?: ILooseObject
  readonly encoded?: string
  clone (): IFixMsgStoreRecord
}

export class FixMsgStoreRecord implements IFixMsgStoreRecord {
  constructor (public readonly msgType: string,
               public readonly timestamp: Date,
               public readonly seqNum: number,
               public obj?: ILooseObject,
               public readonly encoded?: string) {
  }
  clone (): IFixMsgStoreRecord {
    return new FixMsgStoreRecord(this.msgType, this.timestamp, this.seqNum, this.obj, this.encoded)
  }
}
