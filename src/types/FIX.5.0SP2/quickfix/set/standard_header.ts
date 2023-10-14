import { IHopGrp } from './hop_grp'

/*
***********************************
* The standard FIX message header *
***********************************
*/
export interface IStandardHeader {
  BeginString: string// [1] 8 (String)
  BodyLength: number// [2] 9 (Int)
  MsgType: string// [3] 35 (String)
  ApplVerID?: string// [4] 1128 (String)
  ApplExtID?: number// [5] 1156 (Int)
  CstmApplVerID?: string// [6] 1129 (String)
  SenderCompID: string// [7] 49 (String)
  TargetCompID: string// [8] 56 (String)
  OnBehalfOfCompID?: string// [9] 115 (String)
  DeliverToCompID?: string// [10] 128 (String)
  SecureDataLen?: number// [11] 90 (Int)
  SecureData?: Buffer// [12] 91 (RawData)
  MsgSeqNum: number// [13] 34 (Int)
  SenderSubID?: string// [14] 50 (String)
  SenderLocationID?: string// [15] 142 (String)
  TargetSubID?: string// [16] 57 (String)
  TargetLocationID?: string// [17] 143 (String)
  OnBehalfOfSubID?: string// [18] 116 (String)
  OnBehalfOfLocationID?: string// [19] 144 (String)
  DeliverToSubID?: string// [20] 129 (String)
  DeliverToLocationID?: string// [21] 145 (String)
  PossDupFlag?: boolean// [22] 43 (Boolean)
  PossResend?: boolean// [23] 97 (Boolean)
  SendingTime: Date// [24] 52 (UtcTimestamp)
  OrigSendingTime?: Date// [25] 122 (UtcTimestamp)
  XmlDataLen?: number// [26] 212 (Int)
  XmlData?: Buffer// [27] 213 (RawData)
  MessageEncoding?: string// [28] 347 (String)
  LastMsgSeqNumProcessed?: number// [29] 369 (Int)
  HopGrp?: IHopGrp[]// [30] HopCompID.628, HopSendingTime.629, HopRefID.630
}
