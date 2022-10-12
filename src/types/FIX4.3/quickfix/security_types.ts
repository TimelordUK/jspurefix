import { IStandardHeader } from './set/standard_header'
import { ISecurityTypesNoSecurityTypes } from './set/security_types_no_security_types'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityTypes {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  SecurityReqID: string// [2] 320 (String)
  SecurityResponseID: string// [3] 322 (String)
  SecurityResponseType: number// [4] 323 (Int)
  TotalNumSecurityTypes?: number// [5] 557 (Int)
  NoSecurityTypes?: ISecurityTypesNoSecurityTypes[]// [6] SecurityType.167, Product.460, CFICode.461
  Text?: string// [7] 58 (String)
  EncodedTextLen?: number// [8] 354 (Length)
  EncodedText?: Buffer// [9] 355 (RawData)
  TradingSessionID?: string// [10] 336 (String)
  TradingSessionSubID?: string// [11] 625 (String)
  SubscriptionRequestType?: string// [12] 263 (String)
  StandardTrailer: IStandardTrailer// [13] SignatureLength.93, Signature.89, CheckSum.10
}
