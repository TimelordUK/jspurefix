import { IPaymentSettlParties } from './payment_settl_parties'

export interface IPaymentSettlGrpNoPaymentSettls {
  PaymentSettlAmount?: number// [1] 40231 (Float)
  PaymentSettlCurrency?: string// [2] 40232 (String)
  PaymentSettlParties?: IPaymentSettlParties// [3] NoPaymentSettlPartyIDs.40233, PaymentSettlPartyID.40234 .. PaymentSettlPartySubIDType.40240
}
