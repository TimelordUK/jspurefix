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
  OrdStatusReqID?: string// 790
  QuoteID?: string// 117
  LegAccount?: string// 2680
  AcctIDSource?: number// 660
  AllocAccountType?: number// 798
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
