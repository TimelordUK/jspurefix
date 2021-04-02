import { Iheader } from './set/header'
import { ILogonNoMsgTypes } from './set/logon_no_msg_types'
import { Itrailer } from './set/trailer'

export interface ILogon {
  header: Iheader
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
  trailer: Itrailer
}
