import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* Indication of interest messages market merchandise which the *
* broker is buying or selling in either a proprietary or       *
* agency capacity.                                             *
****************************************************************
*/
export interface IIOI {
  StandardHeader: IStandardHeader
  IOIid: string// 23
  IOITransType: string// 28
  IOIRefID?: string// 26
  Symbol: string// 55
  SymbolSfx?: string// 65
  SecurityID?: string// 48
  IDSource?: string// 22
  SecurityType?: string// 167
  MaturityMonthYear?: string// 200
  MaturityDay?: number// 205
  PutOrCall?: number// 201
  StrikePrice?: number// 202
  OptAttribute?: string// 206
  ContractMultiplier?: number// 231
  CouponRate?: number// 223
  SecurityExchange?: string// 207
  Issuer?: string// 106
  EncodedIssuerLen?: number// 348
  EncodedIssuer?: Buffer// 349
  SecurityDesc?: string// 107
  EncodedSecurityDescLen?: number// 350
  EncodedSecurityDesc?: Buffer// 351
  Side: string// 54
  IOIShares: string// 27
  Price?: number// 44
  Currency?: string// 15
  ValidUntilTime?: Date// 62
  IOIQltyInd?: string// 25
  IOINaturalFlag?: boolean// 130
  NoIOIQualifiers?: number// 199
  IOIQualifier?: string// 104
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  TransactTime?: Date// 60
  URLLink?: string// 149
  NoRoutingIDs?: number// 215
  RoutingType?: number// 216
  RoutingID?: string// 217
  SpreadToBenchmark?: number// 218
  Benchmark?: string// 219
  StandardTrailer: IStandardTrailer
}
