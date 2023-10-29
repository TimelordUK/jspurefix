import { IUnderlyingProvisionPtysSubGrp } from './underlying_provision_ptys_sub_grp'

export interface IUnderlyingProvisionPartiesNoUnderlyingProvisionPartyIDs {
  UnderlyingProvisionPartyID?: string// [1] 42174 (String)
  UnderlyingProvisionPartyIDSource?: string// [2] 42175 (String)
  UnderlyingProvisionPartyRole?: number// [3] 42176 (Int)
  UnderlyingProvisionPartyRoleQualifier?: number// [4] 40918 (Int)
  UnderlyingProvisionPtysSubGrp?: IUnderlyingProvisionPtysSubGrp// [5] NoUnderlyingProvisionPartySubIDs.42177, UnderlyingProvisionPartySubID.42178, UnderlyingProvisionPartySubIDType.42179
}
