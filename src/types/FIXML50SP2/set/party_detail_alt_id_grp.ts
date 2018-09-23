import { IPartyDetailAltSubGrp } from './party_detail_alt_sub_grp'

export interface IPartyDetailAltIDGrp {
  BatchID?: string// 50000
  LegContractualMatrixSource?: string// 42204
  PartyDetailAltSubGrp?: IPartyDetailAltSubGrp[]
}
