import { IProvisionCashSettlPaymentDateBusinessCenterGrp } from './provision_cash_settl_payment_date_business_center_grp'
import { IProvisionCashSettlPaymentFixedDateGrp } from './provision_cash_settl_payment_fixed_date_grp'

export interface IProvisionCashSettlPaymentDates {
  ProvisionCashSettlPaymentDateBusinessDayConvention?: number// [1] 40163 (Int)
  ProvisionCashSettlPaymentDateBusinessCenterGrp?: IProvisionCashSettlPaymentDateBusinessCenterGrp// [2] NoProvisionCashSettlPaymentDateBusinessCenters.40952, ProvisionCashSettlPaymentDateBusinessCenter.40164
  ProvisionCashSettlPaymentDateRelativeTo?: number// [3] 40165 (Int)
  ProvisionCashSettlPaymentDateOffsetPeriod?: number// [4] 40166 (Int)
  ProvisionCashSettlPaymentDateOffsetUnit?: string// [5] 40167 (String)
  ProvisionCashSettlPaymentDateOffsetDayType?: number// [6] 40168 (Int)
  ProvisionCashSettlPaymentDateRangeFirst?: Date// [7] 40169 (LocalDate)
  ProvisionCashSettlPaymentDateRangeLast?: Date// [8] 40170 (LocalDate)
  ProvisionCashSettlPaymentFixedDateGrp?: IProvisionCashSettlPaymentFixedDateGrp// [9] NoProvisionCashSettlPaymentDates.40171, ProvisionCashSettlPaymentDate.40172, ProvisionCashSettlPaymentDateType.40173
}
