import { IPartyDetailSubGrp } from './party_detail_sub_grp'
import { IPartyDetailAltIDGrp } from './party_detail_alt_id_grp'
import { IRelatedPartyDetailGrp } from './related_party_detail_grp'

export interface IPartyDetailGrp {
  BatchID?: string// 50000
  LegContractualMatrixSource?: string// 42204
  UnderlyingProvisionPartyRole?: number// 42176
  UnderlyingProtectionTermEventQualifier?: string// 42086
  MDStatisticStatus?: number// 2477
  PartyDetailSubGrp?: IPartyDetailSubGrp[]
  PartyDetailAltIDGrp?: IPartyDetailAltIDGrp[]
  RelatedPartyDetailGrp?: IRelatedPartyDetailGrp[]
}
