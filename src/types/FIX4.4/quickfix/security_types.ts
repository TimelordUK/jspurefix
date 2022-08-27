import { IStandardHeader } from './set/standard_header'
import { ISecTypesGrp } from './set/sec_types_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityTypes {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  SecurityReqID: string// [2] 320 (String)
  SecurityResponseID: string// [3] 322 (String)
  SecurityResponseType: number// [4] 323 (Int)
  TotNoSecurityTypes?: number// [5] 557 (Int)
  LastFragment?: boolean// [6] 893 (Boolean)
  SecTypesGrp?: ISecTypesGrp// [7] NoSecurityTypes.558, SecurityType.167 .. CFICode.461
  Text?: string// [8] 58 (String)
  EncodedTextLen?: number// [9] 354 (Length)
  EncodedText?: Buffer// [10] 355 (RawData)
  TradingSessionID?: string// [11] 336 (String)
  TradingSessionSubID?: string// [12] 625 (String)
  SubscriptionRequestType?: string// [13] 263 (String)
  StandardTrailer: IStandardTrailer// [14] SignatureLength.93, Signature.89, CheckSum.10
}
