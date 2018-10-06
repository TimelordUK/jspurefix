import { ILegPaymentStubEndDateBusinessCenterGrp } from './leg_payment_stub_end_date_business_center_grp'

export interface ILegPaymentStubEndDate {
  LegPaymentStubEndDateUnadjusted?: Date// 42488
  LegPaymentStubEndDateBusinessDayConvention?: number// 42489
  LegPaymentStubEndDateRelativeTo?: number// 42490
  LegPaymentStubEndDateOffsetPeriod?: number// 42491
  LegPaymentStubEndDateOffsetUnit?: string// 42492
  LegPaymentStubEndDateOffsetDayType?: number// 42493
  LegPaymentStubEndDateAdjusted?: Date// 42494
  LegPaymentStubEndDateBusinessCenterGrp?: ILegPaymentStubEndDateBusinessCenterGrp[]
}
