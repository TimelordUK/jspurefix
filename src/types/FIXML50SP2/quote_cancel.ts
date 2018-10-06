import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'
import { IQuotCxlEntriesGrp } from './set/quot_cxl_entries_grp'

/*
***********************************************
* QuoteCancel can be found in Volume 3 of the *
*                                             *
* specification                               *
***********************************************
*/
export interface IQuoteCancel {
  QuoteReqID?: string// 131
  QuoteID?: string// 117
  SecondaryQuoteID?: string// 1751
  QuoteMsgID?: string// 1166
  QuoteCancelType: number// 298
  QuoteType?: number// 537
  QuoteResponseLevel?: number// 301
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  TargetParties?: ITargetParties[]
  QuotCxlEntriesGrp?: IQuotCxlEntriesGrp[]
}
