import { IUnderlyingDividendPaymentGrp } from './underlying_dividend_payment_grp'

export interface IUnderlyingDividendPayout {
  UnderlyingDividendPayoutRatio?: number// [1] 42860 (Float)
  UnderlyingDividendPayoutConditions?: string// [1] 42861 (String)
  UnderlyingDividendPaymentGrp?: IUnderlyingDividendPaymentGrp[]// [1] Dt.42856, Amt.42857 .. AcrdInt.42859
}
