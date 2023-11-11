import { IUnderlyingPaymentStubEndDateBusinessCenterGrp } from './underlying_payment_stub_end_date_business_center_grp'

export interface IUnderlyingPaymentStubEndDate {
  UnderlyingPaymentStubEndDateUnadjusted?: Date// [1] 42984 (LocalDate)
  UnderlyingPaymentStubEndDateBusinessDayConvention?: number// [2] 42985 (Int)
  UnderlyingPaymentStubEndDateBusinessCenterGrp?: IUnderlyingPaymentStubEndDateBusinessCenterGrp// [3] NoUnderlyingPaymentStubEndDateBusinessCenters.42991, UnderlyingPaymentStubEndDateBusinessCenter.42992
  UnderlyingPaymentStubEndDateRelativeTo?: number// [4] 42986 (Int)
  UnderlyingPaymentStubEndDateOffsetPeriod?: number// [5] 42987 (Int)
  UnderlyingPaymentStubEndDateOffsetUnit?: string// [6] 42988 (String)
  UnderlyingPaymentStubEndDateOffsetDayType?: number// [7] 42989 (Int)
  UnderlyingPaymentStubEndDateAdjusted?: Date// [8] 42990 (LocalDate)
}
