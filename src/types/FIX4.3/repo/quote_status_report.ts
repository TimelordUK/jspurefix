import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
*******************************************************
* The quote status report message is used:            *
* " As the response to a Quote Status Request message *
* " As a response to a Quote Cancel message           *
*******************************************************
*/
export interface IQuoteStatusReport {
  StandardHeader: IStandardHeader
  QuoteReqID?: string// 131
  QuoteID: string// 117
  Parties?: IParties[]
  Account?: string// 1
  TradingSessionID?: string// 336
  Instrument: IInstrument
  BidPx?: number// 132
  OfferPx?: number// 133
  BidSize?: number// 134
  OfferSize?: number// 135
  ValidUntilTime?: Date// 62
  BidSpotRate?: number// 188
  OfferSpotRate?: number// 190
  BidForwardPoints?: number// 189
  OfferForwardPoints?: number// 191
  TransactTime?: Date// 60
  FutSettDate?: Date// 64
  OrdType?: string// 40
  FutSettDate2?: Date// 193
  OrderQty2?: number// 192
  Currency?: string// 15
  SettlCurrFxRateCalc?: string// 156
  Commission?: number// 12
  CommType?: string// 13
  ExDestination?: string// 100
  QuoteAckStatus?: number// 297
  StandardTrailer: IStandardTrailer
}
