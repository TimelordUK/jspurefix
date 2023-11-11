import { ILegPaymentStubEndDateBusinessCenterGrp } from './leg_payment_stub_end_date_business_center_grp'

export interface ILegPaymentStubEndDate {
  LegPaymentStubEndDateUnadjusted?: Date// [1] 42488 (LocalDate)
  LegPaymentStubEndDateBusinessDayConvention?: number// [1] 42489 (Int)
  LegPaymentStubEndDateRelativeTo?: number// [1] 42490 (Int)
  LegPaymentStubEndDateOffsetPeriod?: number// [1] 42491 (Int)
  LegPaymentStubEndDateOffsetUnit?: string// [1] 42492 (String)
  LegPaymentStubEndDateOffsetDayType?: number// [1] 42493 (Int)
  LegPaymentStubEndDateAdjusted?: Date// [1] 42494 (LocalDate)
  LegPaymentStubEndDateBusinessCenterGrp?: ILegPaymentStubEndDateBusinessCenterGrp[]// [1] Ctr.42496
}
