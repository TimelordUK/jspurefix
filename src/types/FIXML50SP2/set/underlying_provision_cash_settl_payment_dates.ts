import { IUnderlyingProvisionCashSettlPaymentDateBusinessCenterGrp } from './underlying_provision_cash_settl_payment_date_business_center_grp'
import { IUnderlyingProvisionCashSettlPaymentFixedDateGrp } from './underlying_provision_cash_settl_payment_fixed_date_grp'

export interface IUnderlyingProvisionCashSettlPaymentDates {
  UnderlyingProvisionCashSettlPaymentDateBusinessDayConvention?: number// [1] 42092 (Int)
  UnderlyingProvisionCashSettlPaymentDateRelativeTo?: number// [1] 42093 (Int)
  UnderlyingProvisionCashSettlPaymentDateOffsetPeriod?: number// [1] 42094 (Int)
  UnderlyingProvisionCashSettlPaymentDateOffsetUnit?: string// [1] 42095 (String)
  UnderlyingProvisionCashSettlPaymentDateOffsetDayType?: number// [1] 42096 (Int)
  UnderlyingProvisionCashSettlPaymentDateRangeFirst?: Date// [1] 42097 (LocalDate)
  UnderlyingProvisionCashSettlPaymentDateRangeLast?: Date// [1] 42098 (LocalDate)
  UnderlyingProvisionCashSettlPaymentDateBusinessCenterGrp?: IUnderlyingProvisionCashSettlPaymentDateBusinessCenterGrp[]// [1] Ctr.42181
  UnderlyingProvisionCashSettlPaymentFixedDateGrp?: IUnderlyingProvisionCashSettlPaymentFixedDateGrp[]// [2] Dt.42100, Typ.42101
}
