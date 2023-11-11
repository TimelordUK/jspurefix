import { IPtysSubGrp } from './ptys_sub_grp'

export interface IPartiesNoPartyIDs {
  PartyID?: string// [1] 448 (String)
  PartyIDSource?: string// [2] 447 (String)
  PartyRole?: number// [3] 452 (Int)
  PartyRoleQualifier?: number// [4] 2376 (Int)
  PtysSubGrp?: IPtysSubGrp// [5] NoPartySubIDs.802, PartySubID.523, PartySubIDType.803
}
