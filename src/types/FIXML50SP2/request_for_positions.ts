import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ITrdgSesGrp } from './set/trdg_ses_grp'

/*
*******************************************************
* RequestForPositions can be found in Volume 5 of the *
*                                                     *
* specification                                       *
*******************************************************
*/
export interface IRequestForPositions {
  MDStatisticReqID: string// 2452
  RiskLimitRequestType: number// 1760
  MatchStatus?: string// 573
  SubscriptionRequestType?: string// 263
  UnderlyingProvisionCashSettlCurrency?: string// 42167
  LegAccount?: string// 2680
  AcctIDSource?: number// 660
  AllocAccountType?: number// 798
  UnderlyingReturnRatePriceCurrency?: string// 43067
  ClearingBusinessDate: Date// 715
  LegSettlDate?: Date// 588
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  RelSymTransactTime: Date// 1504
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
  TrdgSesGrp?: ITrdgSesGrp[]
}
