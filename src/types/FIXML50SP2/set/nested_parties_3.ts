import { INstdPtys3SubGrp } from './nstd_ptys_3_sub_grp'

export interface INestedParties3 {
  BatchID?: string// 50000
  LegContractualMatrixSource?: string// 42204
  UnderlyingProvisionPartyRole?: number// 42176
  UnderlyingProtectionTermEventQualifier?: string// 42086
  NstdPtys3SubGrp?: INstdPtys3SubGrp[]
}
