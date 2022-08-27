import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
*********************************************************
* The logon message authenticates a user establishing a *
* connection to a remote system.                        *
*********************************************************
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
  NoMsgTypes?: number// [9] 384 (Int)
  RefMsgType?: string// [10] 372 (String)
  MsgDirection?: string// [11] 385 (String)
  TestMessageIndicator?: boolean// [12] 464 (Boolean)
  Username?: string// [13] 553 (String)
  Password?: string// [14] 554 (String)
  StandardTrailer: IStandardTrailer// [15] SignatureLength.93, Signature.89, CheckSum.10
}
