import { IUnderlyingInstrument } from './underlying_instrument'

export interface IUndInstrmtCollGrp {
  CollAction?: number// [1] 944 (Int)
  UnderlyingInstrument?: IUnderlyingInstrument// [1] Sym.311, Sfx.312 .. XID.2631
}
