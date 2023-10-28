import { INstdPtys4SubGrp } from './nstd_ptys_4_sub_grp'

export interface INestedParties4NoNested4PartyIDs {
  Nested4PartyID?: string// [1] 1415 (String)
  Nested4PartyIDSource?: string// [2] 1416 (String)
  Nested4PartyRole?: number// [3] 1417 (Int)
  Nested4PartyRoleQualifier?: number// [4] 2383 (Int)
  NstdPtys4SubGrp?: INstdPtys4SubGrp// [5] NoNested4PartySubIDs.1413, Nested4PartySubID.1412, Nested4PartySubIDType.1411
}
