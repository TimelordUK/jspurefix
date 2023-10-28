import { IStandardHeader } from './set/standard_header'
import { IAffectedOrdGrp } from './set/affected_ord_grp'
import { INotAffectedOrdGrp } from './set/not_affected_ord_grp'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'
import { IInstrument } from './set/instrument'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IStandardTrailer } from './set/standard_trailer'

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
  AffectedOrdGrp?: IAffectedOrdGrp// [11] NoAffectedOrders.534, AffectedOrigClOrdID.1824 .. AffectedSecondaryOrderID.536
  NotAffectedOrdGrp?: INotAffectedOrdGrp// [12] NoNotAffectedOrders.1370, NotAffOrigClOrdID.1372 .. NotAffectedReason.2677
  TradingSessionID?: string// [13] 336 (String)
  TradingSessionSubID?: string// [14] 625 (String)
  Parties?: IParties// [15] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TargetParties?: ITargetParties// [16] NoTargetPartyIDs.1461, TargetPartyID.1462 .. TargetPartySubIDType.2435
  Instrument?: IInstrument// [17] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  UnderlyingInstrument?: IUnderlyingInstrument// [18] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingInstrumentXID.2631
  MarketID?: string// [19] 1301 (String)
  MarketSegmentID?: string// [20] 1300 (String)
  Side?: string// [21] 54 (String)
  TransactTime?: Date// [22] 60 (UtcTimestamp)
  Text?: string// [23] 58 (String)
  EncodedTextLen?: number// [24] 354 (Length)
  EncodedText?: Buffer// [25] 355 (RawData)
  StandardTrailer: IStandardTrailer// [26] SignatureLength.93, Signature.89, CheckSum.10
}
