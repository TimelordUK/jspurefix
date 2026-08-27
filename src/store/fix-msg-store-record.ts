import { ILooseObject } from '../collections/collection'
// straight at the module, not the ../buffer barrel: the barrel now names the
// ascii parser, which reaches config and back into this file - see the madge
// check in npm run circular
import { MsgView } from '../buffer/msg-view'
import { MsgTag } from '../types'

export interface IFixMsgStoreRecord {
  readonly msgType: string
  readonly timestamp: Date
  readonly seqNum: number
  obj?: ILooseObject | null
  readonly encoded?: string | null
  clone: () => IFixMsgStoreRecord
}

export class FixMsgStoreRecord implements IFixMsgStoreRecord {
  constructor (public readonly msgType: string,
    public readonly timestamp: Date,
    public readonly seqNum: number,
    public obj?: ILooseObject,
    public readonly encoded?: string | null) {
  }

  static toMsgStoreRecord (v: MsgView): IFixMsgStoreRecord {
    return new FixMsgStoreRecord(v.getString(MsgTag.MsgType) ?? '', v.getTyped(MsgTag.SendingTime) as Date, v.getTyped(MsgTag.MsgSeqNum) as number, v.toObject() as ILooseObject)
  }

  clone (): IFixMsgStoreRecord {
    return new FixMsgStoreRecord(this.msgType, this.timestamp, this.seqNum, this.obj, this.encoded)
  }
}
