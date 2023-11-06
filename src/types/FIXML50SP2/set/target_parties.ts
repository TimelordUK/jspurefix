import { ITargetPtysSubGrp } from './target_ptys_sub_grp'

export interface ITargetParties {
  TargetPartyID?: string// [1] 1462 (String)
  TargetPartyIDSource?: string// [1] 1463 (String)
  TargetPartyRole?: number// [1] 1464 (Int)
  TargetPartyRoleQualifier?: number// [1] 1818 (Int)
  TargetPtysSubGrp?: ITargetPtysSubGrp[]// [1] ID.2434, Typ.139
}
