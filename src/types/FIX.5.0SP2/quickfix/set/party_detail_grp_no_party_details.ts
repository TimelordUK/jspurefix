import { IPartyDetailSubGrp } from './party_detail_sub_grp'
import { IPartyDetailAltIDGrp } from './party_detail_alt_id_grp'
import { IRelatedPartyDetailGrp } from './related_party_detail_grp'

export interface IPartyDetailGrpNoPartyDetails {
  PartyDetailID?: string// [1] 1691 (String)
  PartyDetailIDSource?: string// [2] 1692 (String)
  PartyDetailRole?: number// [3] 1693 (Int)
  PartyDetailRoleQualifier?: number// [4] 1674 (Int)
  PartyDetailSubGrp?: IPartyDetailSubGrp// [5] NoPartyDetailSubIDs.1694, PartyDetailSubID.1695, PartyDetailSubIDType.1696
  PartyDetailAltIDGrp?: IPartyDetailAltIDGrp// [6] NoPartyDetailAltID.1516, PartyDetailAltID.1517 .. PartyDetailAltSubIDType.1521
  RelatedPartyDetailGrp?: IRelatedPartyDetailGrp// [7] NoRelatedPartyDetailID.1562, RelatedPartyDetailID.1563 .. PartyRelationship.1515
  PartyDetailStatus?: number// [8] 1672 (Int)
}
