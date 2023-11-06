import { IPtysSubGrp } from './ptys_sub_grp'

export interface IParties {
  PartyID?: string// [1] 448 (String)
  PartyIDSource?: string// [1] 447 (String)
  PartyRole?: number// [1] 452 (Int)
  PartyRoleQualifier?: number// [1] 2376 (Int)
  PtysSubGrp?: IPtysSubGrp[]// [1] ID.523, Typ.139
}
