import { IPaymentSettlPtysSubGrp } from './payment_settl_ptys_sub_grp'

export interface IPaymentSettlPartiesNoPaymentSettlPartyIDs {
  PaymentSettlPartyID?: string// [1] 40234 (String)
  PaymentSettlPartyIDSource?: string// [2] 40235 (String)
  PaymentSettlPartyRole?: number// [3] 40236 (Int)
  PaymentSettlPartyRoleQualifier?: number// [4] 40237 (Int)
  PaymentSettlPtysSubGrp?: IPaymentSettlPtysSubGrp// [5] NoPaymentSettlPartySubIDs.40238, PaymentSettlPartySubID.40239, PaymentSettlPartySubIDType.40240
}
