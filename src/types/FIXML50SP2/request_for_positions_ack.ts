import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'

/*
**********************************************************
* RequestForPositionsAck can be found in Volume 5 of the *
*                                                        *
* specification                                          *
**********************************************************
*/
export interface IRequestForPositionsAck {
  MDStatisticRptID: string// 2453
  MDStatisticReqID?: string// 2452
  TotalNumPosReports?: number// 727
  TotNumReports?: number// 911
  UnsolicitedIndicator?: string// 325
  EntitlementResult: number// 1884
  MDStatisticStatus: number// 2477
  RiskLimitRequestType?: number// 1760
  MatchStatus?: string// 573
  ClearingBusinessDate?: Date// 715
  SubscriptionRequestType?: string// 263
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  UnderlyingProvisionCashSettlCurrency?: string// 42167
  LegAccount?: string// 2680
  AcctIDSource?: number// 660
  AllocAccountType?: number// 798
  UnderlyingReturnRatePriceCurrency?: string// 43067
  ResponseTransportType?: number// 725
  ResponseDestination?: string// 726
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  Instrument?: IInstrument
  InstrmtLegGrp?: IInstrmtLegGrp[]
  UndInstrmtGrp?: IUndInstrmtGrp[]
}
