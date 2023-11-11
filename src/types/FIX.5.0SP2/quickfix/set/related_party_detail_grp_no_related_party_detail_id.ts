import { IRelatedPartyDetailSubGrp } from './related_party_detail_sub_grp'
import { IRelatedPartyDetailAltIDGrp } from './related_party_detail_alt_id_grp'
import { IPartyRelationshipGrp } from './party_relationship_grp'

export interface IRelatedPartyDetailGrpNoRelatedPartyDetailID {
  RelatedPartyDetailID?: string// [1] 1563 (String)
  RelatedPartyDetailIDSource?: string// [2] 1564 (String)
  RelatedPartyDetailRole?: number// [3] 1565 (Int)
  RelatedPartyDetailRoleQualifier?: number// [4] 1675 (Int)
  RelatedPartyDetailSubGrp?: IRelatedPartyDetailSubGrp// [5] NoRelatedPartyDetailSubIDs.1566, RelatedPartyDetailSubID.1567, RelatedPartyDetailSubIDType.1568
  RelatedPartyDetailAltIDGrp?: IRelatedPartyDetailAltIDGrp// [6] NoRelatedPartyDetailAltID.1569, RelatedPartyDetailAltID.1570 .. RelatedPartyDetailAltSubIDType.1574
  PartyRelationshipGrp?: IPartyRelationshipGrp// [7] NoPartyRelationships.1514, PartyRelationship.1515
}
