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
  MDStatisticReqID?: string// 2452
  QuoteID?: string// 117
  SecondaryQuoteID?: string// 1751
  QuoteMsgID?: string// 1166
  QuoteCancelType: number// 298
  UnderlyingReturnRateValuationDateType?: number// 43073
  QuoteResponseLevel?: number// 301
  LegAccount?: string// 2680
  AcctIDSource?: number// 660
  AllocAccountType?: number// 798
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  TargetParties?: ITargetParties[]
  QuotCxlEntriesGrp?: IQuotCxlEntriesGrp[]
}
