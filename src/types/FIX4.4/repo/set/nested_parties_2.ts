import { INstdPtys2SubGrp } from './nstd_ptys_2_sub_grp'

/*
**************************************************************
* The NestedParties2 component block is identical to the     *
* Parties Block. It is used in other component blocks and    *
* repeating groups when nesting will take place resulting in *
* multiple occurrences of the Parties block within a single  *
* FIX message.. Use of NestedParties2 under these conditions *
* avoids multiple references to the Parties block within the *
* same message which is not allowed in FIX tag/value syntax. *
**************************************************************
*/
export interface INestedParties2 {
  Nested2PartyID?: string// 757
  Nested2PartyIDSource?: string// 758
  Nested2PartyRole?: number// 759
  NstdPtys2SubGrp?: INstdPtys2SubGrp[]
}
