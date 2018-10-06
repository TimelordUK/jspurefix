import { INstdPtysSubGrp } from './nstd_ptys_sub_grp'

export interface INestedParties {
  NestedPartyID?: string// 524
  NestedPartyIDSource?: string// 525
  NestedPartyRole?: number// 538
  NestedPartyRoleQualifier?: number// 2384
  NstdPtysSubGrp?: INstdPtysSubGrp[]
}
