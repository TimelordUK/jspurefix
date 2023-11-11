import { IPaymentStubStartDateBusinessCenterGrp } from './payment_stub_start_date_business_center_grp'

export interface IPaymentStubStartDate {
  PaymentStubStartDateUnadjusted?: Date// [1] 42698 (LocalDate)
  PaymentStubStartDateBusinessDayConvention?: number// [1] 42699 (Int)
  PaymentStubStartDateRelativeTo?: number// [1] 42700 (Int)
  PaymentStubStartDateOffsetPeriod?: number// [1] 42701 (Int)
  PaymentStubStartDateOffsetUnit?: string// [1] 42702 (String)
  PaymentStubStartDateOffsetDayType?: number// [1] 42703 (Int)
  PaymentStubStartDateAdjusted?: Date// [1] 42704 (LocalDate)
  PaymentStubStartDateBusinessCenterGrp?: IPaymentStubStartDateBusinessCenterGrp[]// [1] Ctr.42706
}
