import { IPartyDetailGrp } from './party_detail_grp'
import { IEntitlementGrp } from './entitlement_grp'

export interface IPartyEntitlementAckGrp {
  ListUpdateAction?: string// 1324
  MDStatisticStatus?: number// 2477
  EntitlementResult?: number// 1884
  RejectText?: string// 1328
  EncodedRejectTextLen?: string// 1664
  EncodedRejectText?: Buffer// 1665
  EntitlementRefID?: string// 1885
  PartyDetailGrp?: IPartyDetailGrp[]
  EntitlementGrp?: IEntitlementGrp[]
}
