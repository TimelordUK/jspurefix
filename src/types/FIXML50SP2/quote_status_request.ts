import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'

/*
******************************************************
* QuoteStatusRequest can be found in Volume 3 of the *
*                                                    *
* specification                                      *
******************************************************
*/
export interface IQuoteStatusRequest {
  QuoteStatusReqID?: string// 649
  QuoteID?: string// 117
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  SubscriptionRequestType?: string// 263
  StandardHeader?: IStandardHeader
  Instrument?: IInstrument
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp[]
  InstrmtLegGrp?: IInstrmtLegGrp[]
  Parties?: IParties[]
  TargetParties?: ITargetParties[]
}
