import { ILegDividendAccrualPaymentDateBusinessCenterGrp } from './leg_dividend_accrual_payment_date_business_center_grp'

export interface ILegDividendAccrualPaymentDate {
  LegDividendAccrualPaymentDateRelativeTo?: number// [1] 42330 (Int)
  LegDividendAccrualPaymentDateOffsetPeriod?: number// [2] 42331 (Int)
  LegDividendAccrualPaymentDateOffsetUnit?: string// [3] 42332 (String)
  LegDividendAccrualPaymentDateOffsetDayType?: number// [4] 42333 (Int)
  LegDividendAccrualPaymentDateUnadjusted?: Date// [5] 42334 (LocalDate)
  LegDividendAccrualPaymentDateBusinessDayConvention?: number// [6] 42335 (Int)
  LegDividendAccrualPaymentDateBusinessCenterGrp?: ILegDividendAccrualPaymentDateBusinessCenterGrp// [7] NoLegDividendAccrualPaymentDateBusinessCenters.42310, LegDividendAccrualPaymentDateBusinessCenter.42311
  LegDividendAccrualPaymentDateAdjusted?: Date// [8] 42336 (LocalDate)
}
