import { IPartyDetailGrp } from './party_detail_grp'
import { IEntitlementGrp } from './entitlement_grp'

export interface IPartyEntitlementUpdateGrp {
  ListUpdateAction?: string// 1324
  EntitlementStatus?: number// 1883
  EntitlementRefID?: string// 1885
  PartyDetailGrp?: IPartyDetailGrp[]
  EntitlementGrp?: IEntitlementGrp[]
}
