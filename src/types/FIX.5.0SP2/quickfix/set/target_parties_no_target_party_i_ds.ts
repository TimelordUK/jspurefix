import { ITargetPtysSubGrp } from './target_ptys_sub_grp'

export interface ITargetPartiesNoTargetPartyIDs {
  TargetPartyID?: string// [1] 1462 (String)
  TargetPartyIDSource?: string// [2] 1463 (String)
  TargetPartyRole?: number// [3] 1464 (Int)
  TargetPartyRoleQualifier?: number// [4] 1818 (Int)
  TargetPtysSubGrp?: ITargetPtysSubGrp// [5] NoTargetPartySubIDs.2433, TargetPartySubID.2434, TargetPartySubIDType.2435
}
