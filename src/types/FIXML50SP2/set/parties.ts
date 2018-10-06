import { IPtysSubGrp } from './ptys_sub_grp'

export interface IParties {
  PartyID?: string// 448
  PartyIDSource?: string// 447
  PartyRole?: number// 452
  PartyRoleQualifier?: number// 2376
  PtysSubGrp?: IPtysSubGrp[]
}
