import { IPartyDetailGrp } from './party_detail_grp'
import { IEntitlementGrp } from './entitlement_grp'

export interface IPartyEntitlementGrpNoPartyEntitlements {
  PartyDetailGrp?: IPartyDetailGrp// [1] NoPartyDetails.1671, PartyDetailID.1691 .. PartyDetailStatus.1672
  EntitlementStatus?: number// [2] 1883 (Int)
  EntitlementGrp?: IEntitlementGrp// [3] NoEntitlements.1773, EntitlementIndicator.1774 .. EntitlementEndDate.1783
}
