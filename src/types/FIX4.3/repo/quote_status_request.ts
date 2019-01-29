import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IParties } from './set/parties'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The quote status request message is used for the following  *
* purposes in markets that employ tradeable or restricted     *
* tradeable quotes:                                           *
* * For the issuer of a quote in a market to query the status *
* of that quote (using the QuoteID to specify the target      *
* quote).                                                     *
* * To subscribe and unsubscribe for Quote Status Report      *
* messages for one or more securities.                        *
***************************************************************
*/
export interface IQuoteStatusRequest {
  StandardHeader: IStandardHeader
  QuoteID?: string// 117
  Instrument: IInstrument
  Parties?: IParties[]
  Account?: string// 1
  TradingSessionID?: string// 336
  SubscriptionRequestType?: string// 263
  StandardTrailer: IStandardTrailer
}
