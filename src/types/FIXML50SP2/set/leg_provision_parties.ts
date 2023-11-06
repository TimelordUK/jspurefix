import { ILegProvisionPtysSubGrp } from './leg_provision_ptys_sub_grp'

export interface ILegProvisionParties {
  LegProvisionPartyID?: string// [1] 40534 (String)
  SecurityIDSource?: string// [1] 22 (String)
  LegProvisionPartyRole?: number// [1] 40536 (Int)
  LegProvisionPartyRoleQualifier?: number// [1] 2380 (Int)
  LegProvisionPtysSubGrp?: ILegProvisionPtysSubGrp[]// [1] ID.40538, Typ.139
}
