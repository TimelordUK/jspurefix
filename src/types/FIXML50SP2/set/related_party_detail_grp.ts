import { IRelatedPartyDetailSubGrp } from './related_party_detail_sub_grp'
import { IRelatedPartyDetailAltIDGrp } from './related_party_detail_alt_id_grp'
import { IPartyRelationshipGrp } from './party_relationship_grp'

export interface IRelatedPartyDetailGrp {
  RelatedPartyDetailID?: string// [1] 1563 (String)
  RelatedPartyDetailIDSource?: string// [1] 1564 (String)
  RelatedPartyDetailRole?: number// [1] 1565 (Int)
  RelatedPartyDetailRoleQualifier?: number// [1] 1675 (Int)
  RelatedPartyDetailSubGrp?: IRelatedPartyDetailSubGrp[]// [1] ID.1567, Typ.139
  RelatedPartyDetailAltIDGrp?: IRelatedPartyDetailAltIDGrp[]// [2] ID.1570, Src.1571
  PartyRelationshipGrp?: IPartyRelationshipGrp[]// [3] Rltnshp.1515
}
