import { IStandardHeader } from './set/standard_header'
import { ITargetMarketSegmentGrp } from './set/target_market_segment_grp'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'
import { IInstrument } from './set/instrument'
import { IUnderlyingInstrument } from './set/underlying_instrument'

/*
**********************************************************
* OrderMassActionRequest can be found in Volume 4 of the *
*                                                        *
* specification                                          *
**********************************************************
*/
export interface IOrderMassActionRequest {
  ClOrdID: string// 11
  SecondaryClOrdID?: string// 526
  MassActionType: number// 1373
  MassActionScope: number// 1374
  MassActionReason?: number// 2675
  SideCollateralAmountMarketID?: string// 2692
  SideCollateralAmountMarketSegmentID?: string// 2693
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  RelativeValueSide?: number// 2532
  UnderlyingReturnRatePrice?: number// 43066
  RelSymTransactTime: Date// 1504
  ComplianceID?: string// 376
  ComplianceText?: string// 2404
  EncodedComplianceTextLen?: string// 2351
  EncodedComplianceText?: Buffer// 2352
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  TargetMarketSegmentGrp?: ITargetMarketSegmentGrp[]
  Parties?: IParties[]
  TargetParties?: ITargetParties[]
  Instrument?: IInstrument
  UnderlyingInstrument?: IUnderlyingInstrument
}
