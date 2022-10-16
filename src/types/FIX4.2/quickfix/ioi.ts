import { IStandardHeader } from './set/standard_header'
import { IIOINoIOIQualifiers } from './set/ioi_no_ioi_qualifiers'
import { IIOINoRoutingIDs } from './set/ioi_no_routing_i_ds'
import { IStandardTrailer } from './set/standard_trailer'

export interface IIOI {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  IOIid: string// [2] 23 (String)
  IOITransType: string// [3] 28 (String)
  IOIRefID?: string// [4] 26 (String)
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
  IOIShares: string// [25] 27 (String)
  Price?: number// [26] 44 (Float)
  Currency?: string// [27] 15 (String)
  ValidUntilTime?: Date// [28] 62 (UtcTimestamp)
  IOIQltyInd?: string// [29] 25 (String)
  IOINaturalFlag?: boolean// [30] 130 (Boolean)
  NoIOIQualifiers?: IIOINoIOIQualifiers[]// [31] IOIQualifier.104
  Text?: string// [32] 58 (String)
  EncodedTextLen?: number// [33] 354 (Length)
  EncodedText?: Buffer// [34] 355 (RawData)
  TransactTime?: Date// [35] 60 (UtcTimestamp)
  URLLink?: string// [36] 149 (String)
  NoRoutingIDs?: IIOINoRoutingIDs[]// [37] RoutingType.216, RoutingID.217
  SpreadToBenchmark?: number// [38] 218 (Float)
  Benchmark?: string// [39] 219 (String)
  StandardTrailer: IStandardTrailer// [40] SignatureLength.93, Signature.89, CheckSum.10
}
