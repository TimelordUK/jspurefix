import { IStandardHeader } from './set/standard_header'
import { IAffectedOrdGrp } from './set/affected_ord_grp'
import { INotAffectedOrdGrp } from './set/not_affected_ord_grp'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'
import { IInstrument } from './set/instrument'
import { IUnderlyingInstrument } from './set/underlying_instrument'

/*
*********************************************************
* OrderMassCancelReport can be found in Volume 4 of the *
*                                                       *
* specification                                         *
*********************************************************
*/
export interface IOrderMassCancelReport {
  ClOrdID?: string// 11
  SecondaryClOrdID?: string// 526
  NotAffectedOrderID: string// 1371
  MassActionReportID: string// 1369
  NotAffSecondaryOrderID?: string// 1825
  MassStatusReqType: number// 585
  MassCancelResponse: string// 531
  MassCancelRejectReason?: number// 532
  TotalAffectedOrders?: number// 533
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  SideCollateralAmountMarketID?: string// 2692
  SideCollateralAmountMarketSegmentID?: string// 2693
  RelativeValueSide?: number// 2532
  RelSymTransactTime?: Date// 1504
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  AffectedOrdGrp?: IAffectedOrdGrp[]
  NotAffectedOrdGrp?: INotAffectedOrdGrp[]
  Parties?: IParties[]
  TargetParties?: ITargetParties[]
  Instrument?: IInstrument
  UnderlyingInstrument?: IUnderlyingInstrument
}
