import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The Quote Cancel message is used by an originator of quotes *
* to cancel quotes.                                           *
***************************************************************
*/
export interface IQuoteCancel {
  StandardHeader: IStandardHeader
  QuoteReqID?: string// 131
  QuoteID: string// 117
  QuoteCancelType: number// 298
  QuoteResponseLevel?: number// 301
  Parties?: IParties[]
  Account?: string// 1
  TradingSessionID?: string// 336
  NoQuoteEntries?: number// 295
  Instrument?: IInstrument
  StandardTrailer: IStandardTrailer
}
