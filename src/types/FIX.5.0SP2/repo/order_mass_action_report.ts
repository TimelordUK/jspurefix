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
* The Order Mass Action Report is used to acknowledge an Order *
* Mass Action Request. Note that each affected order that is   *
* suspended or released or canceled is acknowledged with a     *
* separate Execution Report for each order.                    *
****************************************************************
*/
export interface IOrderMassActionReport {
  StandardHeader: IStandardHeader
  ClOrdID?: string// 11
  SecondaryClOrdID?: string// 526
  MassActionReportID: string// 1369
  MassActionType: number// 1373
  MassActionScope: number// 1374
  MassActionResponse: number// 1375
  MassActionRejectReason?: number// 1376
  TotalAffectedOrders?: number// 533
  AffectedOrdGrp?: IAffectedOrdGrp[]
  NotAffectedOrdersGrp?: INotAffectedOrdersGrp[]
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  Parties?: IParties[]
  Instrument?: IInstrument
  UnderlyingInstrument?: IUnderlyingInstrument
  Side?: string// 54
  TransactTime?: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
  TargetParties?: ITargetParties[]
}
