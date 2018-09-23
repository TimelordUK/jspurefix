import { INstdPtys3SubGrp } from './nstd_ptys_3_sub_grp'

/*
**************************************************************
* The NestedParties3 component block is identical to the     *
* Parties Block. It is used in other component blocks and    *
* repeating groups when nesting will take place resulting in *
* multiple occurrences of the Parties block within a single  *
* FIX message.. Use of NestedParties3 under these conditions *
* avoids multiple references to the Parties block within the *
* same message which is not allowed in FIX tag/value syntax. *
**************************************************************
*/
export interface INestedParties3 {
  Nested3PartyID?: string// 949
  Nested3PartyIDSource?: string// 950
  Nested3PartyRole?: number// 951
  NstdPtys3SubGrp?: INstdPtys3SubGrp[]
}
