import { IUnderlyingInstrument } from './underlying_instrument'

export interface IUndInstrmtCollGrp {
  UnderlyingInstrument?: IUnderlyingInstrument// [1] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingDetachmentPoint.1460
  CollAction?: number// [2] 944 (Int)
}
