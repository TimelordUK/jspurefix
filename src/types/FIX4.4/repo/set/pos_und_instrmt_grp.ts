import { IUnderlyingInstrument } from './underlying_instrument'

export interface IPosUndInstrmtGrp {
  UnderlyingInstrument?: IUnderlyingInstrument// [1] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingStipValue.889
  UnderlyingSettlPrice: number// [2] 732 (Float)
  UnderlyingSettlPriceType: number// [3] 733 (Int)
}
