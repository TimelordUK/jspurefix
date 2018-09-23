import { IUnderlyingInstrument } from './underlying_instrument'

export interface IPosUndInstrmtGrp {
  UnderlyingInstrument?: IUnderlyingInstrument
  UnderlyingSettlPrice: number// 732
  UnderlyingSettlPriceType: number// 733
}
