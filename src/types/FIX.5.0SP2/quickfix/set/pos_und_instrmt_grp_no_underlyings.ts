import { IUnderlyingInstrument } from './underlying_instrument'
import { IUnderlyingAmount } from './underlying_amount'

export interface IPosUndInstrmtGrpNoUnderlyings {
  UnderlyingInstrument?: IUnderlyingInstrument// [1] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingInstrumentXID.2631
  UnderlyingSettlPrice?: number// [2] 732 (Float)
  UnderlyingSettlPriceType?: number// [3] 733 (Int)
  UnderlyingDeliveryAmount?: number// [4] 1037 (Float)
  UnderlyingAmount?: IUnderlyingAmount// [5] NoUnderlyingAmounts.984, UnderlyingPayAmount.985 .. UnderlyingSettlementStatus.988
}
