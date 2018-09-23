import { IStandardHeader } from './set/standard_header'
import { IAffectedOrdGrp } from './set/affected_ord_grp'
import { INotAffectedOrdGrp } from './set/not_affected_ord_grp'
import { IAffectedMarketSegmentGrp } from './set/affected_market_segment_grp'
import { INotAffectedMarketSegmentGrp } from './set/not_affected_market_segment_grp'
import { ITargetMarketSegmentGrp } from './set/target_market_segment_grp'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'
import { IInstrument } from './set/instrument'
import { IUnderlyingInstrument } from './set/underlying_instrument'

/*
*********************************************************
* OrderMassActionReport can be found in Volume 4 of the *
*                                                       *
* specification                                         *
*********************************************************
*/
export interface IOrderMassActionReport {
  ClOrdID?: string// 11
  SecondaryClOrdID?: string// 526
  MassActionReportID: string// 1369
  MassActionType: number// 1373
  MassActionScope: number// 1374
  MassActionReason?: number// 2675
  MassActionResponse: number// 1375
  MassActionRejectReason?: number// 1376
  TotalAffectedOrders?: number// 533
  TotalNotAffectedOrders?: number// 2678
  LastFragment?: string// 893
  SideCollateralAmountMarketID?: string// 2692
  SideCollateralAmountMarketSegmentID?: string// 2693
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  RelativeValueSide?: number// 2532
  UnderlyingReturnRatePrice?: number// 43066
  RelSymTransactTime?: Date// 1504
  ComplianceID?: string// 376
  ComplianceText?: string// 2404
  EncodedComplianceTextLen?: string// 2351
  EncodedComplianceText?: Buffer// 2352
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  AffectedOrdGrp?: IAffectedOrdGrp[]
  NotAffectedOrdGrp?: INotAffectedOrdGrp[]
  AffectedMarketSegmentGrp?: IAffectedMarketSegmentGrp[]
  NotAffectedMarketSegmentGrp?: INotAffectedMarketSegmentGrp[]
  TargetMarketSegmentGrp?: ITargetMarketSegmentGrp[]
  Parties?: IParties[]
  TargetParties?: ITargetParties[]
  Instrument?: IInstrument
  UnderlyingInstrument?: IUnderlyingInstrument
}
