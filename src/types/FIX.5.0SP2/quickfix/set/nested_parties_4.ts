import { INstdPtys4SubGrp } from './nstd_ptys_4_sub_grp'

/*
**************************************************************
* The NestedParties4 component block is identical to the     *
* Parties Block. It is used in other component blocks and    *
* repeating groups when nesting will take place resulting in *
* multiple occurrences of the Parties block within a single  *
* FIX message. Use of NestedParties4 under these conditions  *
* avoids multiple references to the Parties block within the *
* same message which is not allowed in FIX tag/value syntax. *
**************************************************************
*/
export interface INestedParties4 {
  Nested4PartyID?: string// [1] 1415 (String)
  Nested4PartyIDSource?: string// [2] 1416 (String)
  Nested4PartyRole?: number// [3] 1417 (Int)
  NstdPtys4SubGrp?: INstdPtys4SubGrp[]// [4] Nested4PartySubID.1412, Nested4PartySubIDType.1411
}
