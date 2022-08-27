import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IOrderQtyData } from './set/order_qty_data'
import { IStandardTrailer } from './set/standard_trailer'

export interface IDontKnowTrade {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  OrderID: string// [2] 37 (String)
  SecondaryOrderID?: string// [3] 198 (String)
  ExecID: string// [4] 17 (String)
  DKReason: string// [5] 127 (String)
  Instrument?: IInstrument// [6] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  UndInstrmtGrp?: IUndInstrmtGrp// [7] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingStipValue.889
  InstrmtLegGrp?: IInstrmtLegGrp// [8] NoLegs.555, LegSymbol.600 .. LegInterestAccrualDate.956
  Side: string// [9] 54 (String)
  OrderQtyData?: IOrderQtyData// [10] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  LastQty?: number// [11] 32 (Float)
  LastPx?: number// [12] 31 (Float)
  Text?: string// [13] 58 (String)
  EncodedTextLen?: number// [14] 354 (Length)
  EncodedText?: Buffer// [15] 355 (RawData)
  StandardTrailer: IStandardTrailer// [16] SignatureLength.93, Signature.89, CheckSum.10
}
