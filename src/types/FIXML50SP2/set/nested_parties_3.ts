import { INstdPtys3SubGrp } from './nstd_ptys_3_sub_grp'

export interface INestedParties3 {
  Nested3PartyID?: string// [1] 949 (String)
  Nested3PartyIDSource?: string// [1] 950 (String)
  Nested3PartyRole?: number// [1] 951 (Int)
  Nested3PartyRoleQualifier?: number// [1] 2382 (Int)
  NstdPtys3SubGrp?: INstdPtys3SubGrp[]// [1] ID.953, Typ.954
}
