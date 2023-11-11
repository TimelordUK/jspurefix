import { ILegProvisionCashSettlPaymentDateBusinessCenterGrp } from './leg_provision_cash_settl_payment_date_business_center_grp'
import { ILegProvisionCashSettlPaymentFixedDateGrp } from './leg_provision_cash_settl_payment_fixed_date_grp'

export interface ILegProvisionCashSettlPaymentDates {
  LegProvisionCashSettlPaymentDateBusinessDayConvention?: number// [1] 40516 (Int)
  LegProvisionCashSettlPaymentDateBusinessCenterGrp?: ILegProvisionCashSettlPaymentDateBusinessCenterGrp// [2] NoLegProvisionCashSettlPaymentDateBusinessCenters.40934, LegProvisionCashSettlPaymentDateBusinessCenter.40517
  LegProvisionCashSettlPaymentDateRelativeTo?: number// [3] 40518 (Int)
  LegProvisionCashSettlPaymentDateOffsetPeriod?: number// [4] 40519 (Int)
  LegProvisionCashSettlPaymentDateOffsetUnit?: string// [5] 40520 (String)
  LegProvisionCashSettlPaymentDateOffsetDayType?: number// [6] 40521 (Int)
  LegProvisionCashSettlPaymentDateRangeFirst?: Date// [7] 40522 (LocalDate)
  LegProvisionCashSettlPaymentDateRangeLast?: Date// [8] 40523 (LocalDate)
  LegProvisionCashSettlPaymentFixedDateGrp?: ILegProvisionCashSettlPaymentFixedDateGrp// [9] NoLegProvisionCashSettlPaymentDates.40473, LegProvisionCashSettlPaymentDate.40474, LegProvisionCashSettlPaymentDateType.40475
}
