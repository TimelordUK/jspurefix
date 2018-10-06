import { IRelatedPartyDetailSubGrp } from './related_party_detail_sub_grp'
import { IRelatedPartyDetailAltIDGrp } from './related_party_detail_alt_id_grp'
import { IPartyRelationshipGrp } from './party_relationship_grp'

export interface IRelatedPartyDetailGrp {
  RelatedPartyDetailID?: string// 1563
  RelatedPartyDetailIDSource?: string// 1564
  RelatedPartyDetailRole?: number// 1565
  RelatedPartyDetailRoleQualifier?: number// 1675
  RelatedPartyDetailSubGrp?: IRelatedPartyDetailSubGrp[]
  RelatedPartyDetailAltIDGrp?: IRelatedPartyDetailAltIDGrp[]
  PartyRelationshipGrp?: IPartyRelationshipGrp[]
}
