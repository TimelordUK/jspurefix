import { INstdPtys3SubGrp } from './nstd_ptys_3_sub_grp'

export interface INestedParties3 {
  Nested3PartyID?: string// 949
  Nested3PartyIDSource?: string// 950
  Nested3PartyRole?: number// 951
  Nested3PartyRoleQualifier?: number// 2382
  NstdPtys3SubGrp?: INstdPtys3SubGrp[]
}
