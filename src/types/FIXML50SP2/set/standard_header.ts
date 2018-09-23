export interface IStandardHeader {
  ThrottleMsgType?: string// 1619
  ApplVerID?: string// 1128
  SenderCompID?: string// 49
  TargetCompID?: string// 56
  OnBehalfOfCompID?: string// 115
  DeliverToCompID?: string// 128
  MsgSeqNum?: string// 34
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
  HopSendingTime?: Date// 629
  OrigSendingTime?: Date// 122
  MessageEncoding?: string// 347
}
