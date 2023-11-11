import { IProvisionPtysSubGrp } from './provision_ptys_sub_grp'

export interface IProvisionParties {
  ProvisionPartyID?: string// [1] 40175 (String)
  ProvisionPartyIDSource?: string// [1] 40176 (String)
  ProvisionPartyRole?: number// [1] 40177 (Int)
  ProvisionPartyRoleQualifier?: number// [1] 2385 (Int)
  ProvisionPtysSubGrp?: IProvisionPtysSubGrp[]// [1] ID.40179, Typ.139
}
