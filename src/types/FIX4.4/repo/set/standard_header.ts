import { IHop } from './hop'

/*
***********************************
* The standard FIX message header *
***********************************
*/
export interface IStandardHeader {
  BeginString: string// [1] 8 (String)
  BodyLength: number// [2] 9 (Int)
  MsgType: string// [3] 35 (String)
  SenderCompID: string// [4] 49 (String)
  TargetCompID: string// [5] 56 (String)
  OnBehalfOfCompID?: string// [6] 115 (String)
  DeliverToCompID?: string// [7] 128 (String)
  SecureDataLen?: number// [8] 90 (Int)
  SecureData?: Buffer// [9] 91 (RawData)
  MsgSeqNum: number// [10] 34 (Int)
  SenderSubID?: string// [11] 50 (String)
  SenderLocationID?: string// [12] 142 (String)
  TargetSubID?: string// [13] 57 (String)
  TargetLocationID?: string// [14] 143 (String)
  OnBehalfOfSubID?: string// [15] 116 (String)
  OnBehalfOfLocationID?: string// [16] 144 (String)
  DeliverToSubID?: string// [17] 129 (String)
  DeliverToLocationID?: string// [18] 145 (String)
  PossDupFlag?: boolean// [19] 43 (Boolean)
  PossResend?: boolean// [20] 97 (Boolean)
  SendingTime: Date// [21] 52 (UtcTimestamp)
  OrigSendingTime?: Date// [22] 122 (UtcTimestamp)
  XmlDataLen?: number// [23] 212 (Int)
  XmlData?: Buffer// [24] 213 (RawData)
  MessageEncoding?: string// [25] 347 (String)
  LastMsgSeqNumProcessed?: number// [26] 369 (Int)
  Hop?: IHop// [27] NoHops.627, HopCompID.628 .. HopRefID.630
}
