import { IUnderlyingProvisionPtysSubGrp } from './underlying_provision_ptys_sub_grp'

export interface IUnderlyingProvisionParties {
  UnderlyingProvisionPartyID?: string// 42174
  UnderlyingProvisionPartyIDSource?: string// 42175
  UnderlyingProvisionPartyRole?: number// 42176
  UnderlyingProvisionPartyRoleQualifier?: number// 40918
  UnderlyingProvisionPtysSubGrp?: IUnderlyingProvisionPtysSubGrp[]
}
