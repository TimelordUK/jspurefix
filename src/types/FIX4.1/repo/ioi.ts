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
  SecurityExchange?: string// 207
  Issuer?: string// 106
  SecurityDesc?: string// 107
  Side: string// 54
  IOIShares: string// 27
  Price?: number// 44
  Currency?: string// 15
  ValidUntilTime?: string// 62
  IOIQltyInd?: string// 25
  IOIOthSvc?: string// 24
  IOINaturalFlag?: string// 130
  NoIOIQualifiers?: number// 199
  IOIQualifier?: string// 104
  Text?: string// 58
  TransactTime?: string// 60
  URLLink?: string// 149
  StandardTrailer: IStandardTrailer
}
