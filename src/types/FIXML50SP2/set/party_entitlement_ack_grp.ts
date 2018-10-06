import { IPartyDetailGrp } from './party_detail_grp'
import { IEntitlementGrp } from './entitlement_grp'

export interface IPartyEntitlementAckGrp {
  ListUpdateAction?: string// 1324
  EntitlementStatus?: number// 1883
  EntitlementResult?: number// 1884
  RejectText?: string// 1328
  EncodedRejectTextLen?: number// 1664
  EncodedRejectText?: Buffer// 1665
  EntitlementRefID?: string// 1885
  PartyDetailGrp?: IPartyDetailGrp[]
  EntitlementGrp?: IEntitlementGrp[]
}
