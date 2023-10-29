import { IPaymentSettlGrpNoPaymentSettls } from './payment_settl_grp_no_payment_settls'

export interface IPaymentSettlGrp {
  NoPaymentSettls?: IPaymentSettlGrpNoPaymentSettls[]// [1] PaymentSettlAmount.40231, PaymentSettlCurrency.40232 .. PaymentSettlPartySubIDType.40240
}
