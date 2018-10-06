import { IUnderlyingDividendPaymentGrp } from './underlying_dividend_payment_grp'

export interface IUnderlyingDividendPayout {
  UnderlyingDividendPayoutRatio?: number// 42860
  UnderlyingDividendPayoutConditions?: string// 42861
  UnderlyingDividendPaymentGrp?: IUnderlyingDividendPaymentGrp[]
}
