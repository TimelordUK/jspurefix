import { ILegProvisionPtysSubGrp } from './leg_provision_ptys_sub_grp'

export interface ILegProvisionParties {
  LegProvisionPartyID?: string// 40534
  SecurityIDSource?: string// 22
  LegProvisionPartyRole?: number// 40536
  LegProvisionPartyRoleQualifier?: number// 2380
  LegProvisionPtysSubGrp?: ILegProvisionPtysSubGrp[]
}
