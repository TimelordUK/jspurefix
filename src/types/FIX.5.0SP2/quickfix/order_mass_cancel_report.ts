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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ClOrdID?: string// [2] 11 (String)
  SecondaryClOrdID?: string// [3] 526 (String)
  OrderID: string// [4] 37 (String)
  MassActionReportID: string// [5] 1369 (String)
  SecondaryOrderID?: string// [6] 198 (String)
  MassCancelRequestType: string// [7] 530 (String)
  MassCancelResponse: string// [8] 531 (String)
  MassCancelRejectReason?: number// [9] 532 (Int)
  TotalAffectedOrders?: number// [10] 533 (Int)
  AffectedOrdGrp?: IAffectedOrdGrp[]// [11] OrigClOrdID.41, AffectedOrderID.535, AffectedSecondaryOrderID.536
  NotAffectedOrdersGrp?: INotAffectedOrdersGrp[]// [12] NotAffOrigClOrdID.1372, NotAffectedOrderID.1371
  TradingSessionID?: string// [13] 336 (String)
  TradingSessionSubID?: string// [14] 625 (String)
  Parties?: IParties[]// [15] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  Instrument?: IInstrument// [16] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  UnderlyingInstrument?: IUnderlyingInstrument// [17] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingDetachmentPoint.1460
  MarketID?: string// [18] 1301 (String)
  MarketSegmentID?: string// [19] 1300 (String)
  Side?: string// [20] 54 (String)
  TransactTime?: Date// [21] 60 (UtcTimestamp)
  Text?: string// [22] 58 (String)
  EncodedTextLen?: number// [23] 354 (Int)
  EncodedText?: Buffer// [24] 355 (RawData)
  StandardTrailer: IStandardTrailer// [25] SignatureLength.93, Signature.89, CheckSum.10
  TargetParties?: ITargetParties[]// [26] TargetPartyID.1462, TargetPartyIDSource.1463, TargetPartyRole.1464
}
