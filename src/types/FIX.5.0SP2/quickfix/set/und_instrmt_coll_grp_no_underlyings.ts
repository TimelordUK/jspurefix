import { IUnderlyingInstrument } from './underlying_instrument'

export interface IUndInstrmtCollGrpNoUnderlyings {
  UnderlyingInstrument?: IUnderlyingInstrument// [1] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingInstrumentXID.2631
  CollAction?: number// [2] 944 (Int)
}
