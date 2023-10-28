import { ILegPaymentStubStartDateBusinessCenterGrp } from './leg_payment_stub_start_date_business_center_grp'

export interface ILegPaymentStubStartDate {
  LegPaymentStubStartDateUnadjusted?: Date// [1] 42497 (LocalDate)
  LegPaymentStubStartDateBusinessDayConvention?: number// [2] 42498 (Int)
  LegPaymentStubStartDateBusinessCenterGrp?: ILegPaymentStubStartDateBusinessCenterGrp// [3] NoLegPaymentStubStartDateBusinessCenters.42504, LegPaymentStubStartDateBusinessCenter.42505
  LegPaymentStubStartDateRelativeTo?: number// [4] 42499 (Int)
  LegPaymentStubStartDateOffsetPeriod?: number// [5] 42500 (Int)
  LegPaymentStubStartDateOffsetUnit?: string// [6] 42501 (String)
  LegPaymentStubStartDateOffsetDayType?: number// [7] 42502 (Int)
  LegPaymentStubStartDateAdjusted?: Date// [8] 42503 (LocalDate)
}
