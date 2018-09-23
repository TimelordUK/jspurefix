import { IProvisionCashSettlPaymentDateBusinessCenterGrp } from './provision_cash_settl_payment_date_business_center_grp'
import { IProvisionCashSettlPaymentFixedDateGrp } from './provision_cash_settl_payment_fixed_date_grp'

export interface IProvisionCashSettlPaymentDates {
  UnderlyingSettlMethodElectionDateBusinessDayConvention?: number// 43077
  UnderlyingSettlMethodElectionDateRelativeTo?: number// 43078
  UnderlyingSettlMethodElectionDateOffsetPeriod?: number// 43079
  UnderlyingSettlMethodElectionDateOffsetUnit?: string// 43080
  UnderlyingSettlMethodElectionDateOffsetDayType?: number// 43081
  UnderlyingProvisionCashSettlPaymentDateRangeFirst?: Date// 42097
  UnderlyingProvisionCashSettlPaymentDateRangeLast?: Date// 42098
  ProvisionCashSettlPaymentDateBusinessCenterGrp?: IProvisionCashSettlPaymentDateBusinessCenterGrp[]
  ProvisionCashSettlPaymentFixedDateGrp?: IProvisionCashSettlPaymentFixedDateGrp[]
}
