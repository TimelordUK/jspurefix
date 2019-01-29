/*
***********************************
* The standard FIX message header *
***********************************
*/
export interface IStandardHeader {
  BeginString: string// 8
  BodyLength: number// 9
  MsgType: string// 35
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
  PossDupFlag?: string// 43
  PossResend?: string// 97
  SendingTime: string// 52
  OrigSendingTime?: string// 122
}
