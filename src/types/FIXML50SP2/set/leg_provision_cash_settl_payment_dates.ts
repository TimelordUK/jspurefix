import { ILegProvisionCashSettlPaymentDateBusinessCenterGrp } from './leg_provision_cash_settl_payment_date_business_center_grp'
import { ILegProvisionCashSettlPaymentFixedDateGrp } from './leg_provision_cash_settl_payment_fixed_date_grp'

export interface ILegProvisionCashSettlPaymentDates {
  LegProvisionCashSettlPaymentDateBusinessDayConvention?: number// [1] 40516 (Int)
  LegProvisionCashSettlPaymentDateRelativeTo?: number// [1] 40518 (Int)
  LegProvisionCashSettlPaymentDateOffsetPeriod?: number// [1] 40519 (Int)
  LegProvisionCashSettlPaymentDateOffsetUnit?: string// [1] 40520 (String)
  LegProvisionCashSettlPaymentDateOffsetDayType?: number// [1] 40521 (Int)
  LegProvisionCashSettlPaymentDateRangeFirst?: Date// [1] 40522 (LocalDate)
  LegProvisionCashSettlPaymentDateRangeLast?: Date// [1] 40523 (LocalDate)
  LegProvisionCashSettlPaymentDateBusinessCenterGrp?: ILegProvisionCashSettlPaymentDateBusinessCenterGrp[]// [1] Ctr.40517
  LegProvisionCashSettlPaymentFixedDateGrp?: ILegProvisionCashSettlPaymentFixedDateGrp[]// [2] Dt.40474, Typ.40475
}
