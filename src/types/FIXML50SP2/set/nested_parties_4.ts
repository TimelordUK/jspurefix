import { INstdPtys4SubGrp } from './nstd_ptys_4_sub_grp'

export interface INestedParties4 {
  Nested4PartyID?: string// [1] 1415 (String)
  Nested4PartyIDSource?: string// [1] 1416 (String)
  Nested4PartyRole?: number// [1] 1417 (Int)
  Nested4PartyRoleQualifier?: number// [1] 2383 (Int)
  NstdPtys4SubGrp?: INstdPtys4SubGrp[]// [1] ID.1412, Typ.1411
}
