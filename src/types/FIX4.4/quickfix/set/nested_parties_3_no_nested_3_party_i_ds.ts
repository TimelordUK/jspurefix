import { INstdPtys3SubGrp } from './nstd_ptys_3_sub_grp'

export interface INestedParties3NoNested3PartyIDs {
  Nested3PartyID?: string// [1] 949 (String)
  Nested3PartyIDSource?: string// [2] 950 (String)
  Nested3PartyRole?: number// [3] 951 (Int)
  NstdPtys3SubGrp?: INstdPtys3SubGrp// [4] NoNested3PartySubIDs.952, Nested3PartySubID.953, Nested3PartySubIDType.954
}
