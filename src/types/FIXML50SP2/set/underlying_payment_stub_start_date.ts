import { IUnderlyingPaymentStubStartDateBusinessCenterGrp } from './underlying_payment_stub_start_date_business_center_grp'

export interface IUnderlyingPaymentStubStartDate {
  UnderlyingPaymentStubStartDateUnadjusted?: Date// [1] 42993 (LocalDate)
  UnderlyingPaymentStubStartDateBusinessDayConvention?: number// [1] 42994 (Int)
  UnderlyingPaymentStubStartDateRelativeTo?: number// [1] 42995 (Int)
  UnderlyingPaymentStubStartDateOffsetPeriod?: number// [1] 42996 (Int)
  UnderlyingPaymentStubStartDateOffsetUnit?: string// [1] 42997 (String)
  UnderlyingPaymentStubStartDateOffsetDayType?: number// [1] 42998 (Int)
  UnderlyingPaymentStubStartDateAdjusted?: Date// [1] 42999 (LocalDate)
  UnderlyingPaymentStubStartDateBusinessCenterGrp?: IUnderlyingPaymentStubStartDateBusinessCenterGrp[]// [1] Ctr.43001
}
