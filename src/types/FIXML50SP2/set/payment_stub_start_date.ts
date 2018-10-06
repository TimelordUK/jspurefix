import { IPaymentStubStartDateBusinessCenterGrp } from './payment_stub_start_date_business_center_grp'

export interface IPaymentStubStartDate {
  PaymentStubStartDateUnadjusted?: Date// 42698
  PaymentStubStartDateBusinessDayConvention?: number// 42699
  PaymentStubStartDateRelativeTo?: number// 42700
  PaymentStubStartDateOffsetPeriod?: number// 42701
  PaymentStubStartDateOffsetUnit?: string// 42702
  PaymentStubStartDateOffsetDayType?: number// 42703
  PaymentStubStartDateAdjusted?: Date// 42704
  PaymentStubStartDateBusinessCenterGrp?: IPaymentStubStartDateBusinessCenterGrp[]
}
