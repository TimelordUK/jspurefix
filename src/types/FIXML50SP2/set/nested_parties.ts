import { INstdPtysSubGrp } from './nstd_ptys_sub_grp'

export interface INestedParties {
  NestedPartyID?: string// [1] 524 (String)
  NestedPartyIDSource?: string// [1] 525 (String)
  NestedPartyRole?: number// [1] 538 (Int)
  NestedPartyRoleQualifier?: number// [1] 2384 (Int)
  NstdPtysSubGrp?: INstdPtysSubGrp[]// [1] ID.545, Typ.805
}
