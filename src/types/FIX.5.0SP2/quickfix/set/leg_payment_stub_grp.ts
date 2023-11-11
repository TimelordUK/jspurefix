import { ILegPaymentStubGrpNoLegPaymentStubs } from './leg_payment_stub_grp_no_leg_payment_stubs'

export interface ILegPaymentStubGrp {
  NoLegPaymentStubs?: ILegPaymentStubGrpNoLegPaymentStubs[]// [1] LegPaymentStubType.40419, LegPaymentStubLength.40420 .. LegPaymentStubIndex2FloorRate.40447
}
