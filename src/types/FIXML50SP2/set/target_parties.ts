import { ITargetPtysSubGrp } from './target_ptys_sub_grp'

export interface ITargetParties {
  TargetPartyID?: string// 1462
  TargetPartyIDSource?: string// 1463
  TargetPartyRole?: number// 1464
  TargetPartyRoleQualifier?: number// 1818
  TargetPtysSubGrp?: ITargetPtysSubGrp[]
}
