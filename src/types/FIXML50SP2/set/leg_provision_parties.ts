import { ILegProvisionPtysSubGrp } from './leg_provision_ptys_sub_grp'

export interface ILegProvisionParties {
  BatchID?: string// 50000
  LegContractualMatrixSource?: string// 42204
  UnderlyingProvisionPartyRole?: number// 42176
  UnderlyingProtectionTermEventQualifier?: string// 42086
  LegProvisionPtysSubGrp?: ILegProvisionPtysSubGrp[]
}
