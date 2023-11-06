import { IUnderlyingInstrument } from './underlying_instrument'
import { IUnderlyingAmount } from './underlying_amount'

export interface IPosUndInstrmtGrp {
  UnderlyingSettlPrice?: number// [1] 732 (Float)
  UnderlyingSettlPriceType?: number// [1] 733 (Int)
  UnderlyingDeliveryAmount?: number// [1] 1037 (Float)
  UnderlyingInstrument?: IUnderlyingInstrument// [1] Sym.311, Sfx.312 .. XID.2631
  UnderlyingAmount?: IUnderlyingAmount[]// [2] PayAmt.985, ColAmt.986 .. SetStat.988
}
