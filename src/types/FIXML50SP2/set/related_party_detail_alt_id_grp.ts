import { IRelatedPartyDetailAltSubGrp } from './related_party_detail_alt_sub_grp'

export interface IRelatedPartyDetailAltIDGrp {
  RelatedPartyDetailAltID?: string// [1] 1570 (String)
  RelatedPartyDetailAltIDSource?: string// [1] 1571 (String)
  RelatedPartyDetailAltSubGrp?: IRelatedPartyDetailAltSubGrp[]// [1] ID.1573, Typ.139
}
