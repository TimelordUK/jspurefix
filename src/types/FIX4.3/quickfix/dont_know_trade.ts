import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IOrderQtyData } from './set/order_qty_data'
import { IStandardTrailer } from './set/standard_trailer'

export interface IDontKnowTrade {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  OrderID: string// [2] 37 (String)
  ExecID: string// [3] 17 (String)
  DKReason: string// [4] 127 (String)
  Instrument?: IInstrument// [5] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  Side: string// [6] 54 (String)
  OrderQtyData?: IOrderQtyData// [7] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  LastQty?: number// [8] 32 (Float)
  LastPx?: number// [9] 31 (Float)
  Text?: string// [10] 58 (String)
  EncodedTextLen?: number// [11] 354 (Length)
  EncodedText?: Buffer// [12] 355 (RawData)
  StandardTrailer: IStandardTrailer// [13] SignatureLength.93, Signature.89, CheckSum.10
}
