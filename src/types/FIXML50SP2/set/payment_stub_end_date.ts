import { IPaymentStubEndDateBusinessCenterGrp } from './payment_stub_end_date_business_center_grp'

export interface IPaymentStubEndDate {
  PaymentStubEndDateUnadjusted?: Date// 42689
  PaymentStubEndDateBusinessDayConvention?: number// 42690
  PaymentStubEndDateRelativeTo?: number// 42691
  PaymentStubEndDateOffsetPeriod?: number// 42692
  PaymentStubEndDateOffsetUnit?: string// 42693
  PaymentStubEndDateOffsetDayType?: number// 42694
  PaymentStubEndDateAdjusted?: Date// 42695
  PaymentStubEndDateBusinessCenterGrp?: IPaymentStubEndDateBusinessCenterGrp[]
}
