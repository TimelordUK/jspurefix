import { INstdPtysSubGrp } from './nstd_ptys_sub_grp'

export interface INestedPartiesNoNestedPartyIDs {
  NestedPartyID?: string// 524
  NestedPartyIDSource?: string// 525
  NestedPartyRole?: number// 538
  NstdPtysSubGrp?: INstdPtysSubGrp
}
