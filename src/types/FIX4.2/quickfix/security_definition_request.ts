import { IStandardHeader } from './set/standard_header'
import { ISecurityDefinitionRequestNoRelatedSym } from './set/security_definition_request_no_related_sym'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityDefinitionRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  SecurityReqID: string// [2] 320 (String)
  SecurityRequestType: number// [3] 321 (Int)
  Symbol?: string// [4] 55 (String)
  SymbolSfx?: string// [5] 65 (String)
  SecurityID?: string// [6] 48 (String)
  IDSource?: string// [7] 22 (String)
  SecurityType?: string// [8] 167 (String)
  MaturityMonthYear?: string// [9] 200 (String)
  MaturityDay?: string// [10] 205 (String)
  PutOrCall?: number// [11] 201 (Int)
  StrikePrice?: number// [12] 202 (Float)
  OptAttribute?: string// [13] 206 (String)
  ContractMultiplier?: number// [14] 231 (Float)
  CouponRate?: number// [15] 223 (Float)
  SecurityExchange?: string// [16] 207 (String)
  Issuer?: string// [17] 106 (String)
  EncodedIssuerLen?: number// [18] 348 (Length)
  EncodedIssuer?: Buffer// [19] 349 (RawData)
  SecurityDesc?: string// [20] 107 (String)
  EncodedSecurityDescLen?: number// [21] 350 (Length)
  EncodedSecurityDesc?: Buffer// [22] 351 (RawData)
  Currency?: string// [23] 15 (String)
  Text?: string// [24] 58 (String)
  EncodedTextLen?: number// [25] 354 (Length)
  EncodedText?: Buffer// [26] 355 (RawData)
  TradingSessionID?: string// [27] 336 (String)
  NoRelatedSym?: ISecurityDefinitionRequestNoRelatedSym[]// [28] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingCurrency.318
  StandardTrailer: IStandardTrailer// [29] SignatureLength.93, Signature.89, CheckSum.10
}
