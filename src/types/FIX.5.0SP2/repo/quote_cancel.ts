import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IQuotCxlEntriesGrp } from './set/quot_cxl_entries_grp'
import { IStandardTrailer } from './set/standard_trailer'
import { ITargetParties } from './set/target_parties'

/*
***************************************************************
* The Quote Cancel message is used by an originator of quotes *
* to cancel quotes.                                           *
* The Quote Cancel message supports cancellation of:          *
* " All quotes                                                *
* " Quotes for a specific symbol or security ID               *
* " All quotes for a security type                            *
* " All quotes for an underlying                              *
***************************************************************
*/
export interface IQuoteCancel {
  StandardHeader: IStandardHeader
  QuoteReqID?: string// 131
  QuoteID?: string// 117
  QuoteMsgID?: string// 1166
  QuoteCancelType: number// 298
  QuoteResponseLevel?: number// 301
  Parties?: IParties[]
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  QuotCxlEntriesGrp?: IQuotCxlEntriesGrp[]
  StandardTrailer: IStandardTrailer
  QuoteType?: number// 537
  TargetParties?: ITargetParties[]
}
