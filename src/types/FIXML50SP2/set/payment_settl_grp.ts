import { IPaymentSettlParties } from './payment_settl_parties'

export interface IPaymentSettlGrp {
  UnderlyingMakeWholeAmount?: number// 42889
  UnderlyingReturnRatePriceCurrency?: string// 43067
  PaymentSettlParties?: IPaymentSettlParties[]
}
