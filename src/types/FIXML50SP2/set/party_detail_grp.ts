import { IPartyDetailSubGrp } from './party_detail_sub_grp'
import { IPartyDetailAltIDGrp } from './party_detail_alt_id_grp'
import { IRelatedPartyDetailGrp } from './related_party_detail_grp'

export interface IPartyDetailGrp {
  PartyDetailID?: string// 1691
  PartyDetailIDSource?: string// 1692
  PartyDetailRole?: number// 1693
  PartyDetailRoleQualifier?: number// 1674
  PartyDetailStatus?: number// 1672
  PartyDetailSubGrp?: IPartyDetailSubGrp[]
  PartyDetailAltIDGrp?: IPartyDetailAltIDGrp[]
  RelatedPartyDetailGrp?: IRelatedPartyDetailGrp[]
}
