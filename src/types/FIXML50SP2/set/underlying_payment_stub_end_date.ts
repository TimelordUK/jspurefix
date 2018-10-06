import { IUnderlyingPaymentStubEndDateBusinessCenterGrp } from './underlying_payment_stub_end_date_business_center_grp'

export interface IUnderlyingPaymentStubEndDate {
  UnderlyingPaymentStubEndDateUnadjusted?: Date// 42984
  UnderlyingPaymentStubEndDateBusinessDayConvention?: number// 42985
  UnderlyingPaymentStubEndDateRelativeTo?: number// 42986
  UnderlyingPaymentStubEndDateOffsetPeriod?: number// 42987
  UnderlyingPaymentStubEndDateOffsetUnit?: string// 42988
  UnderlyingPaymentStubEndDateOffsetDayType?: number// 42989
  UnderlyingPaymentStubEndDateAdjusted?: Date// 42990
  UnderlyingPaymentStubEndDateBusinessCenterGrp?: IUnderlyingPaymentStubEndDateBusinessCenterGrp[]
}
