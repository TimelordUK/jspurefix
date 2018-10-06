import { ILegPaymentStubStartDateBusinessCenterGrp } from './leg_payment_stub_start_date_business_center_grp'

export interface ILegPaymentStubStartDate {
  LegPaymentStubStartDateUnadjusted?: Date// 42497
  LegPaymentStubStartDateBusinessDayConvention?: number// 42498
  LegPaymentStubStartDateRelativeTo?: number// 42499
  LegPaymentStubStartDateOffsetPeriod?: number// 42500
  LegPaymentStubStartDateOffsetUnit?: string// 42501
  LegPaymentStubStartDateOffsetDayType?: number// 42502
  LegPaymentStubStartDateAdjusted?: Date// 42503
  LegPaymentStubStartDateBusinessCenterGrp?: ILegPaymentStubStartDateBusinessCenterGrp[]
}
