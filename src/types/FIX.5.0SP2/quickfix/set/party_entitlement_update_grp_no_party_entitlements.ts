import { IPartyDetailGrp } from './party_detail_grp'
import { IEntitlementGrp } from './entitlement_grp'

export interface IPartyEntitlementUpdateGrpNoPartyEntitlements {
  ListUpdateAction?: string// [1] 1324 (String)
  PartyDetailGrp?: IPartyDetailGrp// [2] NoPartyDetails.1671, PartyDetailID.1691 .. PartyDetailStatus.1672
  EntitlementStatus?: number// [3] 1883 (Int)
  EntitlementGrp?: IEntitlementGrp// [4] NoEntitlements.1773, EntitlementIndicator.1774 .. EntitlementEndDate.1783
  EntitlementRefID?: string// [5] 1885 (String)
}
