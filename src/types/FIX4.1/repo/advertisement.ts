import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
*********************************************************
* Advertisement messages are used to announce completed *
* transactions.                                         *
*********************************************************
*/
export interface IAdvertisement {
  StandardHeader: IStandardHeader
  AdvId: string// 2
  AdvTransType: string// 5
  AdvRefID?: string// 3
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
  AdvSide: string// 4
  Shares: number// 53
  Price?: number// 44
  Currency?: string// 15
  TradeDate?: string// 75
  TransactTime?: string// 60
  Text?: string// 58
  URLLink?: string// 149
  LastMkt?: string// 30
  StandardTrailer: IStandardTrailer
}
