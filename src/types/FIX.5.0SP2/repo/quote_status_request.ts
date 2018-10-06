import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IParties } from './set/parties'
import { IStandardTrailer } from './set/standard_trailer'
import { ITargetParties } from './set/target_parties'

/*
***************************************************************
* The quote status request message is used for the following  *
* purposes in markets that employ tradeable or restricted     *
* tradeable quotes:                                           *
* " For the issuer of a quote in a market to query the status *
* of that quote (using the QuoteID to specify the target      *
* quote).                                                     *
* " To subscribe and unsubscribe for Quote Status Report      *
* messages for one or more securities.                        *
***************************************************************
*/
export interface IQuoteStatusRequest {
  StandardHeader: IStandardHeader
  QuoteStatusReqID?: string// 649
  QuoteID?: string// 117
  Instrument?: IInstrument
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp
  InstrmtLegGrp?: IInstrmtLegGrp
  Parties?: IParties[]
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  SubscriptionRequestType?: string// 263
  StandardTrailer: IStandardTrailer
  TargetParties?: ITargetParties[]
}
