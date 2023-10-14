import { INstdPtysSubGrp } from './nstd_ptys_sub_grp'

/*
**************************************************************
* The NestedParties component block is identical to the      *
* Parties Block. It is used in other component blocks and    *
* repeating groups when nesting will take place resulting in *
* multiple occurrences of the Parties block within a single  *
* FIX message.. Use of NestedParties under these conditions  *
* avoids multiple references to the Parties block within the *
* same message which is not allowed in FIX tag/value syntax. *
**************************************************************
*/
export interface INestedParties {
  NestedPartyID?: string// [1] 524 (String)
  NestedPartyIDSource?: string// [2] 525 (String)
  NestedPartyRole?: number// [3] 538 (Int)
  NstdPtysSubGrp?: INstdPtysSubGrp[]// [4] NestedPartySubID.545, NestedPartySubIDType.805
}
