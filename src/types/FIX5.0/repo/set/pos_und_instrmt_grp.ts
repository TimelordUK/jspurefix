import { IUnderlyingInstrument } from './underlying_instrument'
import { IUnderlyingAmount } from './underlying_amount'

export interface IPosUndInstrmtGrp {
  UnderlyingInstrument?: IUnderlyingInstrument
  UnderlyingSettlPrice?: number// 732
  UnderlyingSettlPriceType?: number// 733
  UnderlyingDeliveryAmount?: number// 1037
  UnderlyingAmount?: IUnderlyingAmount[]
}
