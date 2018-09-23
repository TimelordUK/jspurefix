import { IUnderlyingInstrument } from './underlying_instrument'
import { IUnderlyingAmount } from './underlying_amount'

export interface IPosUndInstrmtGrp {
  UnderlyingSettlPrice?: number// 732
  UnderlyingSettlPriceType?: number// 733
  UnderlyingDeliveryAmount?: number// 1037
  UnderlyingInstrument?: IUnderlyingInstrument
  UnderlyingAmount?: IUnderlyingAmount[]
}
