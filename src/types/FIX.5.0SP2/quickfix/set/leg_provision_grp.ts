import { ILegProvisionGrpNoLegProvisions } from './leg_provision_grp_no_leg_provisions'

export interface ILegProvisionGrp {
  NoLegProvisions?: ILegProvisionGrpNoLegProvisions[]// [1] LegProvisionType.40449, LegProvisionDateUnadjusted.40450 .. LegProvisionPartySubIDType.40539
}
