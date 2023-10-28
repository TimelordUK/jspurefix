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
import { IStandardTrailer } from './set/standard_trailer'

export interface IOrderMassActionReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ClOrdID?: string// [2] 11 (String)
  SecondaryClOrdID?: string// [3] 526 (String)
  MassActionReportID: string// [4] 1369 (String)
  MassActionType: number// [5] 1373 (Int)
  MassActionScope: number// [6] 1374 (Int)
  MassActionReason?: number// [7] 2675 (Int)
  MassActionResponse: number// [8] 1375 (Int)
  MassActionRejectReason?: number// [9] 1376 (Int)
  TotalAffectedOrders?: number// [10] 533 (Int)
  TotalNotAffectedOrders?: number// [11] 2678 (Int)
  LastFragment?: boolean// [12] 893 (Boolean)
  AffectedOrdGrp?: IAffectedOrdGrp// [13] NoAffectedOrders.534, AffectedOrigClOrdID.1824 .. AffectedSecondaryOrderID.536
  NotAffectedOrdGrp?: INotAffectedOrdGrp// [14] NoNotAffectedOrders.1370, NotAffOrigClOrdID.1372 .. NotAffectedReason.2677
  AffectedMarketSegmentGrp?: IAffectedMarketSegmentGrp// [15] NoAffectedMarketSegments.1791, AffectedMarketSegmentID.1792
  NotAffectedMarketSegmentGrp?: INotAffectedMarketSegmentGrp// [16] NoNotAffectedMarketSegments.1793, NotAffectedMarketSegmentID.1794
  MarketID?: string// [17] 1301 (String)
  MarketSegmentID?: string// [18] 1300 (String)
  TargetMarketSegmentGrp?: ITargetMarketSegmentGrp// [19] NoTargetMarketSegments.1789, TargetMarketSegmentID.1790
  TradingSessionID?: string// [20] 336 (String)
  TradingSessionSubID?: string// [21] 625 (String)
  Parties?: IParties// [22] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TargetParties?: ITargetParties// [23] NoTargetPartyIDs.1461, TargetPartyID.1462 .. TargetPartySubIDType.2435
  Instrument?: IInstrument// [24] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  UnderlyingInstrument?: IUnderlyingInstrument// [25] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingInstrumentXID.2631
  Side?: string// [26] 54 (String)
  Price?: number// [27] 44 (Float)
  TransactTime?: Date// [28] 60 (UtcTimestamp)
  ComplianceID?: string// [29] 376 (String)
  ComplianceText?: string// [30] 2404 (String)
  EncodedComplianceTextLen?: number// [31] 2351 (Length)
  EncodedComplianceText?: Buffer// [32] 2352 (RawData)
  Text?: string// [33] 58 (String)
  EncodedTextLen?: number// [34] 354 (Length)
  EncodedText?: Buffer// [35] 355 (RawData)
  StandardTrailer: IStandardTrailer// [36] SignatureLength.93, Signature.89, CheckSum.10
}
