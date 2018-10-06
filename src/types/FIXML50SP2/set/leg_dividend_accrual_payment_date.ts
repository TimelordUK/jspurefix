import { ILegDividendAccrualPaymentDateBusinessCenterGrp } from './leg_dividend_accrual_payment_date_business_center_grp'

export interface ILegDividendAccrualPaymentDate {
  LegDividendAccrualPaymentDateRelativeTo?: number// 42330
  LegDividendAccrualPaymentDateOffsetPeriod?: number// 42331
  LegDividendAccrualPaymentDateOffsetUnit?: string// 42332
  LegDividendAccrualPaymentDateOffsetDayType?: number// 42333
  LegDividendAccrualPaymentDateUnadjusted?: Date// 42334
  LegDividendAccrualPaymentDateBusinessDayConvention?: number// 42335
  LegDividendAccrualPaymentDateAdjusted?: Date// 42336
  LegDividendAccrualPaymentDateBusinessCenterGrp?: ILegDividendAccrualPaymentDateBusinessCenterGrp[]
}
