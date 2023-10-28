import { IUnderlyingAmountNoUnderlyingAmounts } from './underlying_amount_no_underlying_amounts'

export interface IUnderlyingAmount {
  NoUnderlyingAmounts?: IUnderlyingAmountNoUnderlyingAmounts[]// [1] UnderlyingPayAmount.985, UnderlyingCollectAmount.986 .. UnderlyingSettlementStatus.988
}
