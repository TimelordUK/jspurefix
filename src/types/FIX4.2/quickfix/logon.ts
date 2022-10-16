import { IStandardHeader } from './set/standard_header'
import { ILogonNoMsgTypes } from './set/logon_no_msg_types'
import { IStandardTrailer } from './set/standard_trailer'

export interface ILogon {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  EncryptMethod: number// [2] 98 (Int)
  HeartBtInt: number// [3] 108 (Int)
  RawDataLength?: number// [4] 95 (Length)
  RawData?: Buffer// [5] 96 (RawData)
  ResetSeqNumFlag?: boolean// [6] 141 (Boolean)
  MaxMessageSize?: number// [7] 383 (Int)
  NoMsgTypes?: ILogonNoMsgTypes[]// [8] RefMsgType.372, MsgDirection.385
  StandardTrailer: IStandardTrailer// [9] SignatureLength.93, Signature.89, CheckSum.10
}
