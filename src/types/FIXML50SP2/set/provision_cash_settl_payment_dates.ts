import { IProvisionCashSettlPaymentDateBusinessCenterGrp } from './provision_cash_settl_payment_date_business_center_grp'
import { IProvisionCashSettlPaymentFixedDateGrp } from './provision_cash_settl_payment_fixed_date_grp'

export interface IProvisionCashSettlPaymentDates {
  ProvisionCashSettlPaymentDateBusinessDayConvention?: number// 40163
  ProvisionCashSettlPaymentDateRelativeTo?: number// 40165
  ProvisionCashSettlPaymentDateOffsetPeriod?: number// 40166
  ProvisionCashSettlPaymentDateOffsetUnit?: string// 40167
  ProvisionCashSettlPaymentDateOffsetDayType?: number// 40168
  ProvisionCashSettlPaymentDateRangeFirst?: Date// 40169
  ProvisionCashSettlPaymentDateRangeLast?: Date// 40170
  ProvisionCashSettlPaymentDateBusinessCenterGrp?: IProvisionCashSettlPaymentDateBusinessCenterGrp[]
  ProvisionCashSettlPaymentFixedDateGrp?: IProvisionCashSettlPaymentFixedDateGrp[]
}
