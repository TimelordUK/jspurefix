import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface IDontKnowTrade {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  OrderID: string// [2] 37 (String)
  ExecID: string// [3] 17 (String)
  DKReason: string// [4] 127 (String)
  Symbol: string// [5] 55 (String)
  SymbolSfx?: string// [6] 65 (String)
  SecurityID?: string// [7] 48 (String)
  IDSource?: string// [8] 22 (String)
  SecurityType?: string// [9] 167 (String)
  MaturityMonthYear?: string// [10] 200 (String)
  MaturityDay?: string// [11] 205 (String)
  PutOrCall?: number// [12] 201 (Int)
  StrikePrice?: number// [13] 202 (Float)
  OptAttribute?: string// [14] 206 (String)
  ContractMultiplier?: number// [15] 231 (Float)
  CouponRate?: number// [16] 223 (Float)
  SecurityExchange?: string// [17] 207 (String)
  Issuer?: string// [18] 106 (String)
  EncodedIssuerLen?: number// [19] 348 (Length)
  EncodedIssuer?: Buffer// [20] 349 (RawData)
  SecurityDesc?: string// [21] 107 (String)
  EncodedSecurityDescLen?: number// [22] 350 (Length)
  EncodedSecurityDesc?: Buffer// [23] 351 (RawData)
  Side: string// [24] 54 (String)
  OrderQty?: number// [25] 38 (Float)
  CashOrderQty?: number// [26] 152 (Float)
  LastShares?: number// [27] 32 (Float)
  LastPx?: number// [28] 31 (Float)
  Text?: string// [29] 58 (String)
  EncodedTextLen?: number// [30] 354 (Length)
  EncodedText?: Buffer// [31] 355 (RawData)
  StandardTrailer: IStandardTrailer// [32] SignatureLength.93, Signature.89, CheckSum.10
}
