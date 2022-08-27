import { IUnderlyingInstrument } from './underlying_instrument'

export interface IUndInstrmtCollGrpNoUnderlyings {
  UnderlyingInstrument?: IUnderlyingInstrument// [1] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingStipValue.889
  CollAction?: number// [2] 944 (Int)
}
