import { IUnderlyingDividendPaymentGrp } from './underlying_dividend_payment_grp'

export interface IUnderlyingDividendPayout {
  UnderlyingDividendPayoutRatio?: number// [1] 42860 (Float)
  UnderlyingDividendPayoutConditions?: string// [2] 42861 (String)
  UnderlyingDividendPaymentGrp?: IUnderlyingDividendPaymentGrp// [3] NoUnderlyingDividendPayments.42855, UnderlyingDividendPaymentDate.42856 .. UnderlyingDividendAccruedInterest.42859
}
