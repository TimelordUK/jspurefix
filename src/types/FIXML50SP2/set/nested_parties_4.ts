import { INstdPtys4SubGrp } from './nstd_ptys_4_sub_grp'

export interface INestedParties4 {
  BatchID?: string// 50000
  LegContractualMatrixSource?: string// 42204
  UnderlyingProvisionPartyRole?: number// 42176
  UnderlyingProtectionTermEventQualifier?: string// 42086
  NstdPtys4SubGrp?: INstdPtys4SubGrp[]
}
