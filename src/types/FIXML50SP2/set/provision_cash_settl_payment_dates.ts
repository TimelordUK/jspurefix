import { IProvisionCashSettlPaymentDateBusinessCenterGrp } from './provision_cash_settl_payment_date_business_center_grp'
import { IProvisionCashSettlPaymentFixedDateGrp } from './provision_cash_settl_payment_fixed_date_grp'

export interface IProvisionCashSettlPaymentDates {
  ProvisionCashSettlPaymentDateBusinessDayConvention?: number// [1] 40163 (Int)
  ProvisionCashSettlPaymentDateRelativeTo?: number// [1] 40165 (Int)
  ProvisionCashSettlPaymentDateOffsetPeriod?: number// [1] 40166 (Int)
  ProvisionCashSettlPaymentDateOffsetUnit?: string// [1] 40167 (String)
  ProvisionCashSettlPaymentDateOffsetDayType?: number// [1] 40168 (Int)
  ProvisionCashSettlPaymentDateRangeFirst?: Date// [1] 40169 (LocalDate)
  ProvisionCashSettlPaymentDateRangeLast?: Date// [1] 40170 (LocalDate)
  ProvisionCashSettlPaymentDateBusinessCenterGrp?: IProvisionCashSettlPaymentDateBusinessCenterGrp[]// [1] Ctr.40164
  ProvisionCashSettlPaymentFixedDateGrp?: IProvisionCashSettlPaymentFixedDateGrp[]// [2] Dt.40172, Typ.40173
}
