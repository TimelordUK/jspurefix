import { IPaymentSettlPtysSubGrp } from './payment_settl_ptys_sub_grp'

export interface IPaymentSettlParties {
  PaymentSettlPartyID?: string// [1] 40234 (String)
  PaymentSettlPartyIDSource?: string// [1] 40235 (String)
  PaymentSettlPartyRole?: number// [1] 40236 (Int)
  PaymentSettlPartyRoleQualifier?: number// [1] 40237 (Int)
  PaymentSettlPtysSubGrp?: IPaymentSettlPtysSubGrp[]// [1] ID.40239, Typ.139
}
