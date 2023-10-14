import { IUnderlyingInstrument } from './underlying_instrument'

export interface IUndInstrmtGrp {
  NoUnderlyings?: number// [1] 711 (Int)
  UnderlyingInstrument?: IUnderlyingInstrument// [2] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingDetachmentPoint.1460
}
