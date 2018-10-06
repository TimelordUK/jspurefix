import { IPaymentSettlPtysSubGrp } from './payment_settl_ptys_sub_grp'

export interface IPaymentSettlParties {
  PaymentSettlPartyID?: string// 40234
  PaymentSettlPartyIDSource?: string// 40235
  PaymentSettlPartyRole?: number// 40236
  PaymentSettlPartyRoleQualifier?: number// 40237
  PaymentSettlPtysSubGrp?: IPaymentSettlPtysSubGrp[]
}
