import { IProvisionPtysSubGrp } from './provision_ptys_sub_grp'

export interface IProvisionPartiesNoProvisionPartyIDs {
  ProvisionPartyID?: string// [1] 40175 (String)
  ProvisionPartyIDSource?: string// [2] 40176 (String)
  ProvisionPartyRole?: number// [3] 40177 (Int)
  ProvisionPartyRoleQualifier?: number// [4] 2385 (Int)
  ProvisionPtysSubGrp?: IProvisionPtysSubGrp// [5] NoProvisionPartySubIDs.40178, ProvisionPartySubID.40179, ProvisionPartySubIDType.40180
}
