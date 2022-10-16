import { IStandardHeader } from './set/standard_header'
import { ISecurityDefinitionNoRelatedSym } from './set/security_definition_no_related_sym'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityDefinition {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  SecurityReqID: string// [2] 320 (String)
  SecurityResponseID: string// [3] 322 (String)
  SecurityResponseType?: number// [4] 323 (Int)
  TotalNumSecurities: number// [5] 393 (Int)
  Symbol?: string// [6] 55 (String)
  SymbolSfx?: string// [7] 65 (String)
  SecurityID?: string// [8] 48 (String)
  IDSource?: string// [9] 22 (String)
  SecurityType?: string// [10] 167 (String)
  MaturityMonthYear?: string// [11] 200 (String)
  MaturityDay?: string// [12] 205 (String)
  PutOrCall?: number// [13] 201 (Int)
  StrikePrice?: number// [14] 202 (Float)
  OptAttribute?: string// [15] 206 (String)
  ContractMultiplier?: number// [16] 231 (Float)
  CouponRate?: number// [17] 223 (Float)
  SecurityExchange?: string// [18] 207 (String)
  Issuer?: string// [19] 106 (String)
  EncodedIssuerLen?: number// [20] 348 (Length)
  EncodedIssuer?: Buffer// [21] 349 (RawData)
  SecurityDesc?: string// [22] 107 (String)
  EncodedSecurityDescLen?: number// [23] 350 (Length)
  EncodedSecurityDesc?: Buffer// [24] 351 (RawData)
  Currency?: string// [25] 15 (String)
  TradingSessionID?: string// [26] 336 (String)
  Text?: string// [27] 58 (String)
  EncodedTextLen?: number// [28] 354 (Length)
  EncodedText?: Buffer// [29] 355 (RawData)
  NoRelatedSym?: ISecurityDefinitionNoRelatedSym[]// [30] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingCurrency.318
  StandardTrailer: IStandardTrailer// [31] SignatureLength.93, Signature.89, CheckSum.10
}
