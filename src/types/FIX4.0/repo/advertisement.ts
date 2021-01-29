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
  AdvId: number// 2
  AdvTransType: string// 5
  AdvRefID?: number// 3
  Symbol: string// 55
  SymbolSfx?: string// 65
  SecurityID?: string// 48
  IDSource?: string// 22
  Issuer?: string// 106
  SecurityDesc?: string// 107
  AdvSide: string// 4
  Shares: number// 53
  Price?: number// 44
  Currency?: string// 15
  TransactTime?: string// 60
  Text?: string// 58
  StandardTrailer: IStandardTrailer
}
