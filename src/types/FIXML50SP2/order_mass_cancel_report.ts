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
  OrderID: string// 37
  MassActionReportID: string// 1369
  SecondaryOrderID?: string// 198
  MassCancelRequestType: string// 530
  MassCancelResponse: string// 531
  MassCancelRejectReason?: number// 532
  TotalAffectedOrders?: number// 533
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  Side?: string// 54
  TransactTime?: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  AffectedOrdGrp?: IAffectedOrdGrp[]
  NotAffectedOrdGrp?: INotAffectedOrdGrp[]
  Parties?: IParties[]
  TargetParties?: ITargetParties[]
  Instrument?: IInstrument
  UnderlyingInstrument?: IUnderlyingInstrument
}
