import { IPaymentSettlPtysSubGrp } from './payment_settl_ptys_sub_grp'

export interface IPaymentSettlParties {
  BatchID?: string// 50000
  LegContractualMatrixSource?: string// 42204
  UnderlyingProvisionPartyRole?: number// 42176
  UnderlyingProtectionTermEventQualifier?: string// 42086
  PaymentSettlPtysSubGrp?: IPaymentSettlPtysSubGrp[]
}
