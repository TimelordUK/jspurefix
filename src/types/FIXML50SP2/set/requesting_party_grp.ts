import { IRequestingPartySubGrp } from './requesting_party_sub_grp'

export interface IRequestingPartyGrp {
  BatchID?: string// 50000
  LegContractualMatrixSource?: string// 42204
  UnderlyingProvisionPartyRole?: number// 42176
  UnderlyingProtectionTermEventQualifier?: string// 42086
  RequestingPartySubGrp?: IRequestingPartySubGrp[]
}
