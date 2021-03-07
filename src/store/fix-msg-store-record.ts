export interface IFixMsgStoreRecord {
  readonly msgType: string
  readonly timestamp: Date
  readonly seqNum: number
  readonly text: string
}

export class FixMsgStoreRecord implements IFixMsgStoreRecord {
  constructor (public readonly msgType: string,
               public readonly timestamp: Date,
               public readonly seqNum: number,
               public readonly text: string) {
  }
}
