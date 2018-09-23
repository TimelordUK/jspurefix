import { IUnderlyingInstrument } from './underlying_instrument'

export interface IPosUndInstrmtGrpNoUnderlyings {
  UnderlyingInstrument?: IUnderlyingInstrument
  UnderlyingSettlPrice: number// 732
  UnderlyingSettlPriceType: number// 733
}
