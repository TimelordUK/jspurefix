import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
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
  Instrument: IInstrument
  AdvSide: string// 4
  Shares: number// 53
  Price?: number// 44
  Currency?: string// 15
  TradeDate?: Date// 75
  TransactTime?: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  URLLink?: string// 149
  LastMkt?: string// 30
  TradingSessionID?: string// 336
  StandardTrailer: IStandardTrailer
}
