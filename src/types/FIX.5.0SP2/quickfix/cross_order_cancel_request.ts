import { IStandardHeader } from './set/standard_header'
import { IRootParties } from './set/root_parties'
import { ISideCrossOrdCxlGrp } from './set/side_cross_ord_cxl_grp'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* Used to fully cancel the remaining open quantity of a cross *
* order.                                                      *
***************************************************************
*/
export interface ICrossOrderCancelRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  OrderID?: string// [2] 37 (String)
  CrossID: string// [3] 548 (String)
  OrigCrossID: string// [4] 551 (String)
  HostCrossID?: string// [5] 961 (String)
  CrossType: number// [6] 549 (Int)
  CrossPrioritization: number// [7] 550 (Int)
  RootParties?: IRootParties[]// [8] RootPartyID.1117, RootPartyIDSource.1118 .. RootPartySubIDType.1122
  SideCrossOrdCxlGrp: ISideCrossOrdCxlGrp[]// [9] Side.54, OrigClOrdID.41 .. EncodedText.355
  Instrument: IInstrument// [10] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  UndInstrmtGrp?: IUndInstrmtGrp// [11] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  InstrmtLegGrp?: IInstrmtLegGrp// [12] NoLegs.555, LegSymbol.600 .. LegFlowScheduleType.1440
  TransactTime: Date// [13] 60 (UtcTimestamp)
  StandardTrailer: IStandardTrailer// [14] SignatureLength.93, Signature.89, CheckSum.10
}
