import { IStandardHeader } from './set/standard_header'
import { IRootParties } from './set/root_parties'
import { ISideCrossOrdCxlGrp } from './set/side_cross_ord_cxl_grp'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface ICrossOrderCancelRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  OrderID?: string// [2] 37 (String)
  OrderRequestID?: number// [3] 2422 (Int)
  CrossID: string// [4] 548 (String)
  OrigCrossID: string// [5] 551 (String)
  HostCrossID?: string// [6] 961 (String)
  CrossType: number// [7] 549 (Int)
  CrossPrioritization: number// [8] 550 (Int)
  RootParties?: IRootParties// [9] NoRootPartyIDs.1116, RootPartyID.1117 .. RootPartySubIDType.1122
  SideCrossOrdCxlGrp?: ISideCrossOrdCxlGrp// [10] NoSides.552, Side.54 .. EncodedText.355
  Instrument?: IInstrument// [11] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  UndInstrmtGrp?: IUndInstrmtGrp// [12] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  InstrmtLegGrp?: IInstrmtLegGrp// [13] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  MarketSegmentID?: string// [14] 1300 (String)
  TransactTime: Date// [15] 60 (UtcTimestamp)
  StandardTrailer: IStandardTrailer// [16] SignatureLength.93, Signature.89, CheckSum.10
}
