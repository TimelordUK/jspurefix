import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
*************************************************************
* In some markets it is the practice to request quotes from *
* brokers prior to placement of an order. The quote request *
* message is used for this purpose.                         *
*************************************************************
*/
export interface IQuoteRequest {
  StandardHeader: IStandardHeader
  QuoteReqID: string// 131
  Symbol: string// 55
  SymbolSfx?: string// 65
  SecurityID?: string// 48
  IDSource?: string// 22
  Issuer?: string// 106
  SecurityDesc?: string// 107
  PrevClosePx?: number// 140
  Side?: string// 54
  OrderQty?: number// 38
  StandardTrailer: IStandardTrailer
}
