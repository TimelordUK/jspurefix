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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ClOrdID?: string// [2] 11 (String)
  SecondaryClOrdID?: string// [3] 526 (String)
  MassActionReportID: string// [4] 1369 (String)
  MassActionType: number// [5] 1373 (Int)
  MassActionScope: number// [6] 1374 (Int)
  MassActionResponse: number// [7] 1375 (Int)
  MassActionRejectReason?: number// [8] 1376 (Int)
  TotalAffectedOrders?: number// [9] 533 (Int)
  AffectedOrdGrp?: IAffectedOrdGrp[]// [10] OrigClOrdID.41, AffectedOrderID.535, AffectedSecondaryOrderID.536
  NotAffectedOrdersGrp?: INotAffectedOrdersGrp[]// [11] NotAffOrigClOrdID.1372, NotAffectedOrderID.1371
  MarketID?: string// [12] 1301 (String)
  MarketSegmentID?: string// [13] 1300 (String)
  TradingSessionID?: string// [14] 336 (String)
  TradingSessionSubID?: string// [15] 625 (String)
  Parties?: IParties[]// [16] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  Instrument?: IInstrument// [17] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  UnderlyingInstrument?: IUnderlyingInstrument// [18] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingDetachmentPoint.1460
  Side?: string// [19] 54 (String)
  TransactTime?: Date// [20] 60 (UtcTimestamp)
  Text?: string// [21] 58 (String)
  EncodedTextLen?: number// [22] 354 (Int)
  EncodedText?: Buffer// [23] 355 (RawData)
  StandardTrailer: IStandardTrailer// [24] SignatureLength.93, Signature.89, CheckSum.10
  TargetParties?: ITargetParties[]// [25] TargetPartyID.1462, TargetPartyIDSource.1463, TargetPartyRole.1464
}
