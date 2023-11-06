import { IPartyDetailGrp } from './party_detail_grp'
import { IEntitlementGrp } from './entitlement_grp'

export interface IPartyEntitlementAckGrp {
  ListUpdateAction?: string// [1] 1324 (String)
  EntitlementStatus?: number// [1] 1883 (Int)
  EntitlementResult?: number// [1] 1884 (Int)
  RejectText?: string// [1] 1328 (String)
  EncodedRejectTextLen?: number// [1] 1664 (Length)
  EncodedRejectText?: Buffer// [1] 1665 (RawData)
  EntitlementRefID?: string// [1] 1885 (String)
  PartyDetailGrp?: IPartyDetailGrp[]// [1] ID.1691, Src.1692 .. Stat.1672
  EntitlementGrp?: IEntitlementGrp[]// [2] Ind.1774, Typ.139 .. EndDt.1783
}
