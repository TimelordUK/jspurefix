import { IInstrument } from './instrument'
import { IUndInstrmtGrp } from './und_instrmt_grp'

export interface IInstrmtStrkPxGrp {
  Instrument: IInstrument// [1] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  UndInstrmtGrp?: IUndInstrmtGrp// [2] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  PrevClosePx?: number// [3] 140 (Float)
  ClOrdID?: string// [4] 11 (String)
  SecondaryClOrdID?: string// [5] 526 (String)
  Side?: string// [6] 54 (String)
  Price?: number// [7] 44 (Float)
  Currency?: string// [8] 15 (String)
  Text?: string// [9] 58 (String)
  EncodedTextLen?: number// [10] 354 (Int)
  EncodedText?: Buffer// [11] 355 (RawData)
}
