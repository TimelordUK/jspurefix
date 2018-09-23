import { IPartyDetailGrp } from './party_detail_grp'
import { IEntitlementGrp } from './entitlement_grp'

export interface IPartyEntitlementGrp {
  MDStatisticStatus?: number// 2477
  PartyDetailGrp?: IPartyDetailGrp[]
  EntitlementGrp?: IEntitlementGrp[]
}
