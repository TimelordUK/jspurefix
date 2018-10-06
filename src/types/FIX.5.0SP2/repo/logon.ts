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
  StandardHeader: IStandardHeader
  EncryptMethod: number// 98
  HeartBtInt: number// 108
  RawDataLength?: number// 95
  RawData?: Buffer// 96
  ResetSeqNumFlag?: boolean// 141
  NextExpectedMsgSeqNum?: number// 789
  MaxMessageSize?: number// 383
  MsgTypeGrp?: IMsgTypeGrp[]
  TestMessageIndicator?: boolean// 464
  Username?: string// 553
  Password?: string// 554
  NewPassword?: string// 925
  EncryptedPasswordMethod?: number// 1400
  EncryptedPasswordLen?: number// 1401
  EncryptedPassword?: Buffer// 1402
  EncryptedNewPasswordLen?: number// 1403
  EncryptedNewPassword?: Buffer// 1404
  SessionStatus?: number// 1409
  DefaultApplVerID: string// 1137
  DefaultApplExtID?: number// 1407
  DefaultCstmApplVerID?: string// 1408
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
