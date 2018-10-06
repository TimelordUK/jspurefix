import { IPaymentSettlParties } from './payment_settl_parties'

export interface IPaymentSettlGrp {
  PaymentSettlAmount?: number// 40231
  PaymentSettlCurrency?: string// 40232
  PaymentSettlParties?: IPaymentSettlParties[]
}
