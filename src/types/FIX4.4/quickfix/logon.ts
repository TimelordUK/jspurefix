import { IStandardHeader } from './set/standard_header'
import { ILogonNoMsgTypes } from './set/logon_no_msg_types'
import { IStandardTrailer } from './set/standard_trailer'

export interface ILogon {
  StandardHeader: IStandardHeader
  EncryptMethod: number// 98
  HeartBtInt: number// 108
  RawDataLength?: number// 95
  RawData?: Buffer// 96
  ResetSeqNumFlag?: boolean// 141
  NextExpectedMsgSeqNum?: number// 789
  MaxMessageSize?: number// 383
  NoMsgTypes?: ILogonNoMsgTypes[]
  TestMessageIndicator?: boolean// 464
  Username?: string// 553
  Password?: string// 554
  StandardTrailer: IStandardTrailer
}
