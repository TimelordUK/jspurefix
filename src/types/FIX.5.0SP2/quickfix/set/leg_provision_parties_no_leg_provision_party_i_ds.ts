import { ILegProvisionPtysSubGrp } from './leg_provision_ptys_sub_grp'

export interface ILegProvisionPartiesNoLegProvisionPartyIDs {
  LegProvisionPartyID?: string// [1] 40534 (String)
  LegProvisionPartyIDSource?: string// [2] 40535 (String)
  LegProvisionPartyRole?: number// [3] 40536 (Int)
  LegProvisionPartyRoleQualifier?: number// [4] 2380 (Int)
  LegProvisionPtysSubGrp?: ILegProvisionPtysSubGrp// [5] NoLegProvisionPartySubIDs.40537, LegProvisionPartySubID.40538, LegProvisionPartySubIDType.40539
}
