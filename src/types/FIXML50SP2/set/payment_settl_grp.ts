import { IPaymentSettlParties } from './payment_settl_parties'

export interface IPaymentSettlGrp {
  PaymentSettlAmount?: number// [1] 40231 (Float)
  PaymentSettlCurrency?: string// [1] 40232 (String)
  PaymentSettlParties?: IPaymentSettlParties[]// [1] ID.40234, Src.40235 .. Qual.40237
}
