import { IPartyEntitlementAckGrpNoPartyEntitlements } from './party_entitlement_ack_grp_no_party_entitlements'

export interface IPartyEntitlementAckGrp {
  NoPartyEntitlements?: IPartyEntitlementAckGrpNoPartyEntitlements[]// [1] ListUpdateAction.1324, EntitlementStatus.1883 .. EntitlementRefID.1885
}
