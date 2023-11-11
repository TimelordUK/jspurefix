import { IPartyDetailSubGrp } from './party_detail_sub_grp'
import { IPartyDetailAltIDGrp } from './party_detail_alt_id_grp'
import { IRelatedPartyDetailGrp } from './related_party_detail_grp'

export interface IPartyDetailGrp {
  PartyDetailID?: string// [1] 1691 (String)
  PartyDetailIDSource?: string// [1] 1692 (String)
  PartyDetailRole?: number// [1] 1693 (Int)
  PartyDetailRoleQualifier?: number// [1] 1674 (Int)
  PartyDetailStatus?: number// [1] 1672 (Int)
  PartyDetailSubGrp?: IPartyDetailSubGrp[]// [1] ID.1695, Typ.1696
  PartyDetailAltIDGrp?: IPartyDetailAltIDGrp[]// [2] ID.1517, Src.1518
  RelatedPartyDetailGrp?: IRelatedPartyDetailGrp[]// [3] ID.1563, Src.1564 .. Qual.1675
}
