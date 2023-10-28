import { IUnderlyingProvisionCashSettlPaymentDateBusinessCenterGrp } from './underlying_provision_cash_settl_payment_date_business_center_grp'
import { IUnderlyingProvisionCashSettlPaymentFixedDateGrp } from './underlying_provision_cash_settl_payment_fixed_date_grp'

export interface IUnderlyingProvisionCashSettlPaymentDates {
  UnderlyingProvisionCashSettlPaymentDateBusinessDayConvention?: number// [1] 42092 (Int)
  UnderlyingProvisionCashSettlPaymentDateBusinessCenterGrp?: IUnderlyingProvisionCashSettlPaymentDateBusinessCenterGrp// [2] NoUnderlyingProvisionCashSettlPaymentDateBusinessCenters.42180, UnderlyingProvisionCashSettlPaymentDateBusinessCenter.42181
  UnderlyingProvisionCashSettlPaymentDateRelativeTo?: number// [3] 42093 (Int)
  UnderlyingProvisionCashSettlPaymentDateOffsetPeriod?: number// [4] 42094 (Int)
  UnderlyingProvisionCashSettlPaymentDateOffsetUnit?: string// [5] 42095 (String)
  UnderlyingProvisionCashSettlPaymentDateOffsetDayType?: number// [6] 42096 (Int)
  UnderlyingProvisionCashSettlPaymentDateRangeFirst?: Date// [7] 42097 (LocalDate)
  UnderlyingProvisionCashSettlPaymentDateRangeLast?: Date// [8] 42098 (LocalDate)
  UnderlyingProvisionCashSettlPaymentFixedDateGrp?: IUnderlyingProvisionCashSettlPaymentFixedDateGrp// [9] NoUnderlyingProvisionCashSettlPaymentDates.42099, UnderlyingProvisionCashSettlPaymentDate.42100, UnderlyingProvisionCashSettlPaymentDateType.42101
}
