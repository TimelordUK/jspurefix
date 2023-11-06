import { IPartyDetailGrp } from './party_detail_grp'
import { IEntitlementGrp } from './entitlement_grp'

export interface IPartyEntitlementUpdateGrp {
  ListUpdateAction?: string// [1] 1324 (String)
  EntitlementStatus?: number// [1] 1883 (Int)
  EntitlementRefID?: string// [1] 1885 (String)
  PartyDetailGrp?: IPartyDetailGrp[]// [1] ID.1691, Src.1692 .. Stat.1672
  EntitlementGrp?: IEntitlementGrp[]// [2] Ind.1774, Typ.139 .. EndDt.1783
}
