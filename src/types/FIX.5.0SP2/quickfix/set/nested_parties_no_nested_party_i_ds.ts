import { INstdPtysSubGrp } from './nstd_ptys_sub_grp'

export interface INestedPartiesNoNestedPartyIDs {
  NestedPartyID?: string// [1] 524 (String)
  NestedPartyIDSource?: string// [2] 525 (String)
  NestedPartyRole?: number// [3] 538 (Int)
  NestedPartyRoleQualifier?: number// [4] 2384 (Int)
  NstdPtysSubGrp?: INstdPtysSubGrp// [5] NoNestedPartySubIDs.804, NestedPartySubID.545, NestedPartySubIDType.805
}
