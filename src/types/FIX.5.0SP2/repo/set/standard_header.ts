import { IHopGrp } from './hop_grp'

/*
***********************************
* The standard FIX message header *
***********************************
*/
export interface IStandardHeader {
  BeginString: string// 8
  BodyLength: number// 9
  MsgType: string// 35
  ApplVerID?: string// 1128
  ApplExtID?: number// 1156
  CstmApplVerID?: string// 1129
  SenderCompID: string// 49
  TargetCompID: string// 56
  OnBehalfOfCompID?: string// 115
  DeliverToCompID?: string// 128
  SecureDataLen?: number// 90
  SecureData?: Buffer// 91
  MsgSeqNum: number// 34
  SenderSubID?: string// 50
  SenderLocationID?: string// 142
  TargetSubID?: string// 57
  TargetLocationID?: string// 143
  OnBehalfOfSubID?: string// 116
  OnBehalfOfLocationID?: string// 144
  DeliverToSubID?: string// 129
  DeliverToLocationID?: string// 145
  PossDupFlag?: boolean// 43
  PossResend?: boolean// 97
  SendingTime: Date// 52
  OrigSendingTime?: Date// 122
  XmlDataLen?: number// 212
  XmlData?: Buffer// 213
  MessageEncoding?: string// 347
  LastMsgSeqNumProcessed?: number// 369
  HopGrp?: IHopGrp[]
}
