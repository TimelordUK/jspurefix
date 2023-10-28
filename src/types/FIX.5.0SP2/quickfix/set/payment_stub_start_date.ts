import { IPaymentStubStartDateBusinessCenterGrp } from './payment_stub_start_date_business_center_grp'

export interface IPaymentStubStartDate {
  PaymentStubStartDateUnadjusted?: Date// [1] 42698 (LocalDate)
  PaymentStubStartDateBusinessDayConvention?: number// [2] 42699 (Int)
  PaymentStubStartDateBusinessCenterGrp?: IPaymentStubStartDateBusinessCenterGrp// [3] NoPaymentStubStartDateBusinessCenters.42705, PaymentStubStartDateBusinessCenter.42706
  PaymentStubStartDateRelativeTo?: number// [4] 42700 (Int)
  PaymentStubStartDateOffsetPeriod?: number// [5] 42701 (Int)
  PaymentStubStartDateOffsetUnit?: string// [6] 42702 (String)
  PaymentStubStartDateOffsetDayType?: number// [7] 42703 (Int)
  PaymentStubStartDateAdjusted?: Date// [8] 42704 (LocalDate)
}
