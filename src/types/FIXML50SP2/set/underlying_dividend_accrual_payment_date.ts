import { IUnderlyingDividendAccrualPaymentDateBusinessCenterGrp } from './underlying_dividend_accrual_payment_date_business_center_grp'

export interface IUnderlyingDividendAccrualPaymentDate {
  UnderlyingDividendAccrualPaymentDateRelativeTo?: number// 42819
  UnderlyingDividendAccrualPaymentDateOffsetPeriod?: number// 42820
  UnderlyingDividendAccrualPaymentDateOffsetUnit?: string// 42821
  UnderlyingDividendAccrualPaymentDateOffsetDayType?: number// 42822
  UnderlyingDividendAccrualPaymentDateUnadjusted?: Date// 42823
  UnderlyingDividendAccrualPaymentDateBusinessDayConvention?: number// 42824
  UnderlyingDividendAccrualPaymentDateAdjusted?: Date// 42825
  UnderlyingDividendAccrualPaymentDateBusinessCenterGrp?: IUnderlyingDividendAccrualPaymentDateBusinessCenterGrp[]
}
