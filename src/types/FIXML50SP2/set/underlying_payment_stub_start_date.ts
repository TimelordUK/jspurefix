import { IUnderlyingPaymentStubStartDateBusinessCenterGrp } from './underlying_payment_stub_start_date_business_center_grp'

export interface IUnderlyingPaymentStubStartDate {
  UnderlyingPaymentStubStartDateUnadjusted?: Date// 42993
  UnderlyingPaymentStubStartDateBusinessDayConvention?: number// 42994
  UnderlyingPaymentStubStartDateRelativeTo?: number// 42995
  UnderlyingPaymentStubStartDateOffsetPeriod?: number// 42996
  UnderlyingPaymentStubStartDateOffsetUnit?: string// 42997
  UnderlyingPaymentStubStartDateOffsetDayType?: number// 42998
  UnderlyingPaymentStubStartDateAdjusted?: Date// 42999
  UnderlyingPaymentStubStartDateBusinessCenterGrp?: IUnderlyingPaymentStubStartDateBusinessCenterGrp[]
}
