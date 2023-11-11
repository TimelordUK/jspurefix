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
  QuoteReqID?: string// [2] 131 (String)
  QuoteID?: string// [2] 117 (String)
  SecondaryQuoteID?: string// [2] 1751 (String)
  QuoteMsgID?: string// [2] 1166 (String)
  QuoteCancelType: number// [2] 298 (Int)
  QuoteType?: number// [2] 537 (Int)
  QuoteResponseLevel?: number// [2] 301 (Int)
  Account?: string// [2] 1 (String)
  AcctIDSource?: number// [2] 660 (Int)
  AccountType?: number// [2] 581 (Int)
  TradingSessionID?: string// [2] 336 (String)
  TradingSessionSubID?: string// [2] 625 (String)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Parties?: IParties[]// [2] ID.448, Src.447 .. Qual.2376
  TargetParties?: ITargetParties[]// [3] ID.1462, Src.1463 .. Qual.1818
  QuotCxlEntriesGrp?: IQuotCxlEntriesGrp[]// [4] 
}
