import { IPaymentStubEndDateBusinessCenterGrp } from './payment_stub_end_date_business_center_grp'

export interface IPaymentStubEndDate {
  PaymentStubEndDateUnadjusted?: Date// [1] 42689 (LocalDate)
  PaymentStubEndDateBusinessDayConvention?: number// [2] 42690 (Int)
  PaymentStubEndDateBusinessCenterGrp?: IPaymentStubEndDateBusinessCenterGrp// [3] NoPaymentStubEndDateBusinessCenters.42696, PaymentStubEndDateBusinessCenter.42697
  PaymentStubEndDateRelativeTo?: number// [4] 42691 (Int)
  PaymentStubEndDateOffsetPeriod?: number// [5] 42692 (Int)
  PaymentStubEndDateOffsetUnit?: string// [6] 42693 (String)
  PaymentStubEndDateOffsetDayType?: number// [7] 42694 (Int)
  PaymentStubEndDateAdjusted?: Date// [8] 42695 (LocalDate)
}
