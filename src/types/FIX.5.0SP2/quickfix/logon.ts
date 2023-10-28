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
  NewPassword?: string// [13] 925 (String)
  EncryptedPasswordMethod?: number// [14] 1400 (Int)
  EncryptedPasswordLen?: number// [15] 1401 (Length)
  EncryptedPassword?: Buffer// [16] 1402 (RawData)
  EncryptedNewPasswordLen?: number// [17] 1403 (Length)
  EncryptedNewPassword?: Buffer// [18] 1404 (RawData)
  SessionStatus?: number// [19] 1409 (Int)
  DefaultApplVerID?: string// [20] 1137 (String)
  DefaultApplExtID?: number// [21] 1407 (Int)
  DefaultCstmApplVerID?: string// [22] 1408 (String)
  Text?: string// [23] 58 (String)
  EncodedTextLen?: number// [24] 354 (Length)
  EncodedText?: Buffer// [25] 355 (RawData)
  StandardTrailer: IStandardTrailer// [26] SignatureLength.93, Signature.89, CheckSum.10
}
