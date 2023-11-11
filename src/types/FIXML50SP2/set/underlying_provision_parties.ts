import { IUnderlyingProvisionPtysSubGrp } from './underlying_provision_ptys_sub_grp'

export interface IUnderlyingProvisionParties {
  UnderlyingProvisionPartyID?: string// [1] 42174 (String)
  UnderlyingProvisionPartyIDSource?: string// [1] 42175 (String)
  UnderlyingProvisionPartyRole?: number// [1] 42176 (Int)
  UnderlyingProvisionPartyRoleQualifier?: number// [1] 40918 (Int)
  UnderlyingProvisionPtysSubGrp?: IUnderlyingProvisionPtysSubGrp[]// [1] ID.42178, Typ.139
}
