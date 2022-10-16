import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityStatusRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  SecurityStatusReqID: string// [2] 324 (String)
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
  SubscriptionRequestType: string// [23] 263 (String)
  TradingSessionID?: string// [24] 336 (String)
  StandardTrailer: IStandardTrailer// [25] SignatureLength.93, Signature.89, CheckSum.10
}
