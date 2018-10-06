import { IUnderlyingProvisionCashSettlPaymentDateBusinessCenterGrp } from './underlying_provision_cash_settl_payment_date_business_center_grp'
import { IUnderlyingProvisionCashSettlPaymentFixedDateGrp } from './underlying_provision_cash_settl_payment_fixed_date_grp'

export interface IUnderlyingProvisionCashSettlPaymentDates {
  UnderlyingProvisionCashSettlPaymentDateBusinessDayConvention?: number// 42092
  UnderlyingProvisionCashSettlPaymentDateRelativeTo?: number// 42093
  UnderlyingProvisionCashSettlPaymentDateOffsetPeriod?: number// 42094
  UnderlyingProvisionCashSettlPaymentDateOffsetUnit?: string// 42095
  UnderlyingProvisionCashSettlPaymentDateOffsetDayType?: number// 42096
  UnderlyingProvisionCashSettlPaymentDateRangeFirst?: Date// 42097
  UnderlyingProvisionCashSettlPaymentDateRangeLast?: Date// 42098
  UnderlyingProvisionCashSettlPaymentDateBusinessCenterGrp?: IUnderlyingProvisionCashSettlPaymentDateBusinessCenterGrp[]
  UnderlyingProvisionCashSettlPaymentFixedDateGrp?: IUnderlyingProvisionCashSettlPaymentFixedDateGrp[]
}
