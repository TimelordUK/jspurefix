import { IStandardHeader } from './set/standard_header'
import { IMsgTypeGrp } from './set/msg_type_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The logon message authenticates a user establishing a        *
* connection to a remote system. The logon message must be the *
* first message sent by the application requesting to initiate *
* a FIX session.                                               *
****************************************************************
*/
export interface ILogon {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  EncryptMethod: number// [2] 98 (Int)
  HeartBtInt: number// [3] 108 (Int)
  RawDataLength?: number// [4] 95 (Int)
  RawData?: Buffer// [5] 96 (RawData)
  ResetSeqNumFlag?: boolean// [6] 141 (Boolean)
  NextExpectedMsgSeqNum?: number// [7] 789 (Int)
  MaxMessageSize?: number// [8] 383 (Int)
  MsgTypeGrp?: IMsgTypeGrp[]// [9] RefMsgType.372, MsgDirection.385 .. DefaultVerIndicator.1410
  TestMessageIndicator?: boolean// [10] 464 (Boolean)
  Username?: string// [11] 553 (String)
  Password?: string// [12] 554 (String)
  NewPassword?: string// [13] 925 (String)
  EncryptedPasswordMethod?: number// [14] 1400 (Int)
  EncryptedPasswordLen?: number// [15] 1401 (Int)
  EncryptedPassword?: Buffer// [16] 1402 (RawData)
  EncryptedNewPasswordLen?: number// [17] 1403 (Int)
  EncryptedNewPassword?: Buffer// [18] 1404 (RawData)
  SessionStatus?: number// [19] 1409 (Int)
  DefaultApplVerID: string// [20] 1137 (String)
  DefaultApplExtID?: number// [21] 1407 (Int)
  DefaultCstmApplVerID?: string// [22] 1408 (String)
  Text?: string// [23] 58 (String)
  EncodedTextLen?: number// [24] 354 (Int)
  EncodedText?: Buffer// [25] 355 (RawData)
  StandardTrailer: IStandardTrailer// [26] SignatureLength.93, Signature.89, CheckSum.10
}
