import { IProvisionGrpNoProvisions } from './provision_grp_no_provisions'

export interface IProvisionGrp {
  NoProvisions?: IProvisionGrpNoProvisions[]// [1] ProvisionType.40091, ProvisionDateUnadjusted.40092 .. ProvisionPartySubIDType.40180
}
