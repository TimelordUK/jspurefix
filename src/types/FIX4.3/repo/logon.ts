import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
*********************************************************
* The logon message authenticates a user establishing a *
* connection to a remote system.                        *
*********************************************************
*/
export interface ILogon {
  StandardHeader: IStandardHeader
  EncryptMethod: number// 98
  HeartBtInt: number// 108
  RawDataLength?: number// 95
  RawData?: Buffer// 96
  ResetSeqNumFlag?: boolean// 141
  MaxMessageSize?: number// 383
  NoMsgTypes?: number// 384
  RefMsgType?: string// 372
  MsgDirection?: string// 385
  StandardTrailer: IStandardTrailer
}
