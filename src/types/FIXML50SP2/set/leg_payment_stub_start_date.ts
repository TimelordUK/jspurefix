import { ILegPaymentStubStartDateBusinessCenterGrp } from './leg_payment_stub_start_date_business_center_grp'

export interface ILegPaymentStubStartDate {
  LegPaymentStubStartDateUnadjusted?: Date// [1] 42497 (LocalDate)
  LegPaymentStubStartDateBusinessDayConvention?: number// [1] 42498 (Int)
  LegPaymentStubStartDateRelativeTo?: number// [1] 42499 (Int)
  LegPaymentStubStartDateOffsetPeriod?: number// [1] 42500 (Int)
  LegPaymentStubStartDateOffsetUnit?: string// [1] 42501 (String)
  LegPaymentStubStartDateOffsetDayType?: number// [1] 42502 (Int)
  LegPaymentStubStartDateAdjusted?: Date// [1] 42503 (LocalDate)
  LegPaymentStubStartDateBusinessCenterGrp?: ILegPaymentStubStartDateBusinessCenterGrp[]// [1] Ctr.42505
}
