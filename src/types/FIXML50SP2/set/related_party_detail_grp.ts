import { IRelatedPartyDetailSubGrp } from './related_party_detail_sub_grp'
import { IRelatedPartyDetailAltIDGrp } from './related_party_detail_alt_id_grp'
import { IPartyRelationshipGrp } from './party_relationship_grp'

export interface IRelatedPartyDetailGrp {
  BatchID?: string// 50000
  LegContractualMatrixSource?: string// 42204
  UnderlyingProvisionPartyRole?: number// 42176
  UnderlyingProtectionTermEventQualifier?: string// 42086
  RelatedPartyDetailSubGrp?: IRelatedPartyDetailSubGrp[]
  RelatedPartyDetailAltIDGrp?: IRelatedPartyDetailAltIDGrp[]
  PartyRelationshipGrp?: IPartyRelationshipGrp[]
}
