import { IStandardHeader } from './set/standard_header'
import { ILogonNoMsgTypes } from './set/logon_no_msg_types'
import { IStandardTrailer } from './set/standard_trailer'

export interface ILogon {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  EncryptMethod: number// [2] 98 (Int)
  HeartBtInt: number// [3] 108 (Int)
  RawDataLength?: number// [4] 95 (Length)
  RawData?: Buffer// [5] 96 (RawData)
  ResetSeqNumFlag?: boolean// [6] 141 (Boolean)
  NextExpectedMsgSeqNum?: number// [7] 789 (Int)
  MaxMessageSize?: number// [8] 383 (Length)
  NoMsgTypes?: ILogonNoMsgTypes[]// [9] RefMsgType.372, MsgDirection.385
  TestMessageIndicator?: boolean// [10] 464 (Boolean)
  Username?: string// [11] 553 (String)
  Password?: string// [12] 554 (String)
  StandardTrailer: IStandardTrailer// [13] SignatureLength.93, Signature.89, CheckSum.10
}
