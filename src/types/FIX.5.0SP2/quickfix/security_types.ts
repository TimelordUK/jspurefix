import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { ISecTypesGrp } from './set/sec_types_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityTypes {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  SecurityReqID: string// [3] 320 (String)
  SecurityResponseID: string// [4] 322 (String)
  SecurityResponseType: number// [5] 323 (Int)
  TotNoSecurityTypes?: number// [6] 557 (Int)
  LastFragment?: boolean// [7] 893 (Boolean)
  SecTypesGrp?: ISecTypesGrp// [8] NoSecurityTypes.558, SecurityType.167 .. TransactTime.60
  Text?: string// [9] 58 (String)
  EncodedTextLen?: number// [10] 354 (Length)
  EncodedText?: Buffer// [11] 355 (RawData)
  MarketID?: string// [12] 1301 (String)
  MarketSegmentID?: string// [13] 1300 (String)
  TradingSessionID?: string// [14] 336 (String)
  TradingSessionSubID?: string// [15] 625 (String)
  SubscriptionRequestType?: string// [16] 263 (String)
  StandardTrailer: IStandardTrailer// [17] SignatureLength.93, Signature.89, CheckSum.10
}
