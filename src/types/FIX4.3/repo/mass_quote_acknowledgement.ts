import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* Mass Quote Acknowledgement is used as the application level *
* response to a Mass Quote message.                           *
***************************************************************
*/
export interface IMassQuoteAcknowledgement {
  StandardHeader: IStandardHeader
  QuoteReqID?: string// 131
  QuoteID?: string// 117
  QuoteAckStatus: number// 297
  QuoteRejectReason?: number// 300
  QuoteResponseLevel?: number// 301
  Parties?: IParties[]
  Account?: string// 1
  Text?: string// 58
  NoQuoteSets?: number// 296
  QuoteSetID?: string// 302
  UnderlyingInstrument?: IUnderlyingInstrument
  TotQuoteEntries?: number// 304
  NoQuoteEntries?: number// 295
  QuoteEntryID?: string// 299
  Instrument?: IInstrument
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
  TradingSessionID?: string// 336
  FutSettDate?: Date// 64
  OrdType?: string// 40
  FutSettDate2?: Date// 193
  OrderQty2?: number// 192
  Currency?: string// 15
  QuoteEntryRejectReason?: number// 368
  StandardTrailer: IStandardTrailer
}
