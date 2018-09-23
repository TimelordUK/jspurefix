import { IUnderlyingProvisionPtysSubGrp } from './underlying_provision_ptys_sub_grp'

export interface IUnderlyingProvisionParties {
  BatchID?: string// 50000
  LegContractualMatrixSource?: string// 42204
  UnderlyingProvisionPartyRole?: number// 42176
  UnderlyingProtectionTermEventQualifier?: string// 42086
  UnderlyingProvisionPtysSubGrp?: IUnderlyingProvisionPtysSubGrp[]
}
