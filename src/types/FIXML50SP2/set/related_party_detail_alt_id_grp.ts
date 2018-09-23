import { IRelatedPartyDetailAltSubGrp } from './related_party_detail_alt_sub_grp'

export interface IRelatedPartyDetailAltIDGrp {
  BatchID?: string// 50000
  LegContractualMatrixSource?: string// 42204
  RelatedPartyDetailAltSubGrp?: IRelatedPartyDetailAltSubGrp[]
}
