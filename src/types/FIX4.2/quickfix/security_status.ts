import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityStatus {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  SecurityStatusReqID?: string// [2] 324 (String)
  Symbol: string// [3] 55 (String)
  SymbolSfx?: string// [4] 65 (String)
  SecurityID?: string// [5] 48 (String)
  IDSource?: string// [6] 22 (String)
  SecurityType?: string// [7] 167 (String)
  MaturityMonthYear?: string// [8] 200 (String)
  MaturityDay?: string// [9] 205 (String)
  PutOrCall?: number// [10] 201 (Int)
  StrikePrice?: number// [11] 202 (Float)
  OptAttribute?: string// [12] 206 (String)
  ContractMultiplier?: number// [13] 231 (Float)
  CouponRate?: number// [14] 223 (Float)
  SecurityExchange?: string// [15] 207 (String)
  Issuer?: string// [16] 106 (String)
  EncodedIssuerLen?: number// [17] 348 (Length)
  EncodedIssuer?: Buffer// [18] 349 (RawData)
  SecurityDesc?: string// [19] 107 (String)
  EncodedSecurityDescLen?: number// [20] 350 (Length)
  EncodedSecurityDesc?: Buffer// [21] 351 (RawData)
  Currency?: string// [22] 15 (String)
  TradingSessionID?: string// [23] 336 (String)
  UnsolicitedIndicator?: boolean// [24] 325 (Boolean)
  SecurityTradingStatus?: number// [25] 326 (Int)
  FinancialStatus?: string// [26] 291 (String)
  CorporateAction?: string// [27] 292 (String)
  HaltReasonChar?: string// [28] 327 (String)
  InViewOfCommon?: boolean// [29] 328 (Boolean)
  DueToRelated?: boolean// [30] 329 (Boolean)
  BuyVolume?: number// [31] 330 (Float)
  SellVolume?: number// [32] 331 (Float)
  HighPx?: number// [33] 332 (Float)
  LowPx?: number// [34] 333 (Float)
  LastPx?: number// [35] 31 (Float)
  TransactTime?: Date// [36] 60 (UtcTimestamp)
  Adjustment?: number// [37] 334 (Int)
  StandardTrailer: IStandardTrailer// [38] SignatureLength.93, Signature.89, CheckSum.10
}
