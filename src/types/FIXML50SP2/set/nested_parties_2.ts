import { INstdPtys2SubGrp } from './nstd_ptys_2_sub_grp'

export interface INestedParties2 {
  BatchID?: string// 50000
  LegContractualMatrixSource?: string// 42204
  UnderlyingProvisionPartyRole?: number// 42176
  UnderlyingProtectionTermEventQualifier?: string// 42086
  NstdPtys2SubGrp?: INstdPtys2SubGrp[]
}
