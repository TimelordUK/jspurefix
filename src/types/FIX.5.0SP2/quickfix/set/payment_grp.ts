import { IPaymentGrpNoPayments } from './payment_grp_no_payments'

export interface IPaymentGrp {
  NoPayments?: IPaymentGrpNoPayments[]// [1] PaymentType.40213, PaymentSubType.40993 .. EncodedPaymentText.40985
}
