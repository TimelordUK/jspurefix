import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { ISecTypesGrp } from './set/sec_types_grp'

/*
*************************************************
* SecurityTypes can be found in Volume 3 of the *
*                                               *
* specification                                 *
*************************************************
*/
export interface ISecurityTypes {
  SecurityReqID: string// [2] 320 (String)
  SecurityResponseID: string// [2] 322 (String)
  SecurityResponseType: number// [2] 323 (Int)
  TotNoSecurityTypes?: number// [2] 557 (Int)
  LastFragment?: boolean// [2] 893 (Boolean)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  MarketID?: string// [2] 1301 (String)
  MarketSegmentID?: string// [2] 1300 (String)
  TradingSessionID?: string// [2] 336 (String)
  TradingSessionSubID?: string// [2] 625 (String)
  SubscriptionRequestType?: string// [2] 263 (String)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  SecTypesGrp?: ISecTypesGrp[]// [3] SecTyp.167, SubTyp.762 .. TxnTm.60
}
