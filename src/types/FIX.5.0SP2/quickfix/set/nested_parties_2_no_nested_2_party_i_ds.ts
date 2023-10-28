import { INstdPtys2SubGrp } from './nstd_ptys_2_sub_grp'

export interface INestedParties2NoNested2PartyIDs {
  Nested2PartyID?: string// [1] 757 (String)
  Nested2PartyIDSource?: string// [2] 758 (String)
  Nested2PartyRole?: number// [3] 759 (Int)
  Nested2PartyRoleQualifier?: number// [4] 2381 (Int)
  NstdPtys2SubGrp?: INstdPtys2SubGrp// [5] NoNested2PartySubIDs.806, Nested2PartySubID.760, Nested2PartySubIDType.807
}
