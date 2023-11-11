import { IPaymentStubEndDateBusinessCenterGrp } from './payment_stub_end_date_business_center_grp'

export interface IPaymentStubEndDate {
  PaymentStubEndDateUnadjusted?: Date// [1] 42689 (LocalDate)
  PaymentStubEndDateBusinessDayConvention?: number// [1] 42690 (Int)
  PaymentStubEndDateRelativeTo?: number// [1] 42691 (Int)
  PaymentStubEndDateOffsetPeriod?: number// [1] 42692 (Int)
  PaymentStubEndDateOffsetUnit?: string// [1] 42693 (String)
  PaymentStubEndDateOffsetDayType?: number// [1] 42694 (Int)
  PaymentStubEndDateAdjusted?: Date// [1] 42695 (LocalDate)
  PaymentStubEndDateBusinessCenterGrp?: IPaymentStubEndDateBusinessCenterGrp[]// [1] Ctr.42697
}
