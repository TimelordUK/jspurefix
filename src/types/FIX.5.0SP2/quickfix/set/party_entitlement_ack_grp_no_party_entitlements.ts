import { IPartyDetailGrp } from './party_detail_grp'
import { IEntitlementGrp } from './entitlement_grp'

export interface IPartyEntitlementAckGrpNoPartyEntitlements {
  ListUpdateAction?: string// [1] 1324 (String)
  EntitlementStatus?: number// [2] 1883 (Int)
  EntitlementResult?: number// [3] 1884 (Int)
  RejectText?: string// [4] 1328 (String)
  EncodedRejectTextLen?: number// [5] 1664 (Length)
  EncodedRejectText?: Buffer// [6] 1665 (RawData)
  PartyDetailGrp?: IPartyDetailGrp// [7] NoPartyDetails.1671, PartyDetailID.1691 .. PartyDetailStatus.1672
  EntitlementGrp?: IEntitlementGrp// [8] NoEntitlements.1773, EntitlementIndicator.1774 .. EntitlementEndDate.1783
  EntitlementRefID?: string// [9] 1885 (String)
}
