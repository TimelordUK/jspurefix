import { ILegPaymentStubEndDateBusinessCenterGrp } from './leg_payment_stub_end_date_business_center_grp'

export interface ILegPaymentStubEndDate {
  LegPaymentStubEndDateUnadjusted?: Date// [1] 42488 (LocalDate)
  LegPaymentStubEndDateBusinessDayConvention?: number// [2] 42489 (Int)
  LegPaymentStubEndDateBusinessCenterGrp?: ILegPaymentStubEndDateBusinessCenterGrp// [3] NoLegPaymentStubEndDateBusinessCenters.42495, LegPaymentStubEndDateBusinessCenter.42496
  LegPaymentStubEndDateRelativeTo?: number// [4] 42490 (Int)
  LegPaymentStubEndDateOffsetPeriod?: number// [5] 42491 (Int)
  LegPaymentStubEndDateOffsetUnit?: string// [6] 42492 (String)
  LegPaymentStubEndDateOffsetDayType?: number// [7] 42493 (Int)
  LegPaymentStubEndDateAdjusted?: Date// [8] 42494 (LocalDate)
}
