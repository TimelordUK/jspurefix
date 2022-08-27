import { IStandardHeader } from './set/standard_header'
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
  CrossType: number// [5] 549 (Int)
  CrossPrioritization: number// [6] 550 (Int)
  SideCrossOrdCxlGrp: ISideCrossOrdCxlGrp[]// [7] Side.54, OrigClOrdID.41 .. EncodedText.355
  Instrument: IInstrument// [8] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  UndInstrmtGrp?: IUndInstrmtGrp[]// [9] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingStipValue.889
  InstrmtLegGrp?: IInstrmtLegGrp[]// [10] LegSymbol.600, LegSymbolSfx.601 .. LegInterestAccrualDate.956
  TransactTime: Date// [11] 60 (UtcTimestamp)
  StandardTrailer: IStandardTrailer// [12] SignatureLength.93, Signature.89, CheckSum.10
}
