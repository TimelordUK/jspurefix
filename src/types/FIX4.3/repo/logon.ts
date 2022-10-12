import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
*********************************************************
* The logon message authenticates a user establishing a *
* connection to a remote system.                        *
*********************************************************
*/
export interface ILogon {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  EncryptMethod: number// [2] 98 (Int)
  HeartBtInt: number// [3] 108 (Int)
  RawDataLength?: number// [4] 95 (Int)
  RawData?: Buffer// [5] 96 (RawData)
  ResetSeqNumFlag?: boolean// [6] 141 (Boolean)
  MaxMessageSize?: number// [7] 383 (Int)
  NoMsgTypes?: number// [8] 384 (Int)
  RefMsgType?: string// [9] 372 (String)
  MsgDirection?: string// [10] 385 (String)
  StandardTrailer: IStandardTrailer// [11] SignatureLength.93, Signature.89, CheckSum.10
}
