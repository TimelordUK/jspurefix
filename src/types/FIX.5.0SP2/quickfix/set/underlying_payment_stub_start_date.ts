import { IUnderlyingPaymentStubStartDateBusinessCenterGrp } from './underlying_payment_stub_start_date_business_center_grp'

export interface IUnderlyingPaymentStubStartDate {
  UnderlyingPaymentStubStartDateUnadjusted?: Date// [1] 42993 (LocalDate)
  UnderlyingPaymentStubStartDateBusinessDayConvention?: number// [2] 42994 (Int)
  UnderlyingPaymentStubStartDateBusinessCenterGrp?: IUnderlyingPaymentStubStartDateBusinessCenterGrp// [3] NoUnderlyingPaymentStubStartDateBusinessCenters.43000, UnderlyingPaymentStubStartDateBusinessCenter.43001
  UnderlyingPaymentStubStartDateRelativeTo?: number// [4] 42995 (Int)
  UnderlyingPaymentStubStartDateOffsetPeriod?: number// [5] 42996 (Int)
  UnderlyingPaymentStubStartDateOffsetUnit?: string// [6] 42997 (String)
  UnderlyingPaymentStubStartDateOffsetDayType?: number// [7] 42998 (Int)
  UnderlyingPaymentStubStartDateAdjusted?: Date// [8] 42999 (LocalDate)
}
