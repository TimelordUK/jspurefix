import { INstdPtys2SubGrp } from './nstd_ptys_2_sub_grp'

export interface INestedParties2 {
  Nested2PartyID?: string// [1] 757 (String)
  Nested2PartyIDSource?: string// [1] 758 (String)
  Nested2PartyRole?: number// [1] 759 (Int)
  Nested2PartyRoleQualifier?: number// [1] 2381 (Int)
  NstdPtys2SubGrp?: INstdPtys2SubGrp[]// [1] ID.760, Typ.807
}
