import { IStandardHeader } from './set/standard_header'
import { IAffectedOrdGrp } from './set/affected_ord_grp'
import { INotAffectedOrdersGrp } from './set/not_affected_orders_grp'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IStandardTrailer } from './set/standard_trailer'
import { ITargetParties } from './set/target_parties'

/*
****************************************************************
* The Order Mass Cancel Report is used to acknowledge an Order *
* Mass Cancel Request. Note that each affected order that is   *
* canceled is acknowledged with a separate Execution Report or *
* Order Cancel Reject message.                                 *
****************************************************************
*/
export interface IOrderMassCancelReport {
  StandardHeader: IStandardHeader
  ClOrdID?: string// 11
  SecondaryClOrdID?: string// 526
  OrderID: string// 37
  MassActionReportID: string// 1369
  SecondaryOrderID?: string// 198
  MassCancelRequestType: string// 530
  MassCancelResponse: string// 531
  MassCancelRejectReason?: number// 532
  TotalAffectedOrders?: number// 533
  AffectedOrdGrp?: IAffectedOrdGrp[]
  NotAffectedOrdersGrp?: INotAffectedOrdersGrp[]
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  Parties?: IParties[]
  Instrument?: IInstrument
  UnderlyingInstrument?: IUnderlyingInstrument
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  Side?: string// 54
  TransactTime?: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
  TargetParties?: ITargetParties[]
}
