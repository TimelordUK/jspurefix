import { IProvisionPtysSubGrp } from './provision_ptys_sub_grp'

export interface IProvisionParties {
  ProvisionPartyID?: string// 40175
  ProvisionPartyIDSource?: string// 40176
  ProvisionPartyRole?: number// 40177
  ProvisionPartyRoleQualifier?: number// 2385
  ProvisionPtysSubGrp?: IProvisionPtysSubGrp[]
}
