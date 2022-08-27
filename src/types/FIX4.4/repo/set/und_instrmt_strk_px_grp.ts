import { IUnderlyingInstrument } from './underlying_instrument'

export interface IUndInstrmtStrkPxGrp {
  UnderlyingInstrument?: IUnderlyingInstrument// [1] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingStipValue.889
  PrevClosePx?: number// [2] 140 (Float)
  ClOrdID?: string// [3] 11 (String)
  SecondaryClOrdID?: string// [4] 526 (String)
  Side?: string// [5] 54 (String)
  Price: number// [6] 44 (Float)
  Currency?: string// [7] 15 (String)
  Text?: string// [8] 58 (String)
  EncodedTextLen?: number// [9] 354 (Int)
  EncodedText?: Buffer// [10] 355 (RawData)
}
