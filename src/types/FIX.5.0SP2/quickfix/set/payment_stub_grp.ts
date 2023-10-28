import { IPaymentStubGrpNoPaymentStubs } from './payment_stub_grp_no_payment_stubs'

export interface IPaymentStubGrp {
  NoPaymentStubs?: IPaymentStubGrpNoPaymentStubs[]// [1] PaymentStubType.40873, PaymentStubLength.40874 .. PaymentStubIndex2FloorRate.40901
}
