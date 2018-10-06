import { ILegProvisionCashSettlPaymentDateBusinessCenterGrp } from './leg_provision_cash_settl_payment_date_business_center_grp'
import { ILegProvisionCashSettlPaymentFixedDateGrp } from './leg_provision_cash_settl_payment_fixed_date_grp'

export interface ILegProvisionCashSettlPaymentDates {
  LegProvisionCashSettlPaymentDateBusinessDayConvention?: number// 40516
  LegProvisionCashSettlPaymentDateRelativeTo?: number// 40518
  LegProvisionCashSettlPaymentDateOffsetPeriod?: number// 40519
  LegProvisionCashSettlPaymentDateOffsetUnit?: string// 40520
  LegProvisionCashSettlPaymentDateOffsetDayType?: number// 40521
  LegProvisionCashSettlPaymentDateRangeFirst?: Date// 40522
  LegProvisionCashSettlPaymentDateRangeLast?: Date// 40523
  LegProvisionCashSettlPaymentDateBusinessCenterGrp?: ILegProvisionCashSettlPaymentDateBusinessCenterGrp[]
  LegProvisionCashSettlPaymentFixedDateGrp?: ILegProvisionCashSettlPaymentFixedDateGrp[]
}
