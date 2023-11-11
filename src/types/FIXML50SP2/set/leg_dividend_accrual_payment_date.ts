import { ILegDividendAccrualPaymentDateBusinessCenterGrp } from './leg_dividend_accrual_payment_date_business_center_grp'

export interface ILegDividendAccrualPaymentDate {
  LegDividendAccrualPaymentDateRelativeTo?: number// [1] 42330 (Int)
  LegDividendAccrualPaymentDateOffsetPeriod?: number// [1] 42331 (Int)
  LegDividendAccrualPaymentDateOffsetUnit?: string// [1] 42332 (String)
  LegDividendAccrualPaymentDateOffsetDayType?: number// [1] 42333 (Int)
  LegDividendAccrualPaymentDateUnadjusted?: Date// [1] 42334 (LocalDate)
  LegDividendAccrualPaymentDateBusinessDayConvention?: number// [1] 42335 (Int)
  LegDividendAccrualPaymentDateAdjusted?: Date// [1] 42336 (LocalDate)
  LegDividendAccrualPaymentDateBusinessCenterGrp?: ILegDividendAccrualPaymentDateBusinessCenterGrp[]// [1] Ctr.42311
}
