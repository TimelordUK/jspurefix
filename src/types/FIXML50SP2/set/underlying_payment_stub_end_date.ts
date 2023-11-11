import { IUnderlyingPaymentStubEndDateBusinessCenterGrp } from './underlying_payment_stub_end_date_business_center_grp'

export interface IUnderlyingPaymentStubEndDate {
  UnderlyingPaymentStubEndDateUnadjusted?: Date// [1] 42984 (LocalDate)
  UnderlyingPaymentStubEndDateBusinessDayConvention?: number// [1] 42985 (Int)
  UnderlyingPaymentStubEndDateRelativeTo?: number// [1] 42986 (Int)
  UnderlyingPaymentStubEndDateOffsetPeriod?: number// [1] 42987 (Int)
  UnderlyingPaymentStubEndDateOffsetUnit?: string// [1] 42988 (String)
  UnderlyingPaymentStubEndDateOffsetDayType?: number// [1] 42989 (Int)
  UnderlyingPaymentStubEndDateAdjusted?: Date// [1] 42990 (LocalDate)
  UnderlyingPaymentStubEndDateBusinessCenterGrp?: IUnderlyingPaymentStubEndDateBusinessCenterGrp[]// [1] Ctr.42992
}
