import { IPartyDetailAltSubGrp } from './party_detail_alt_sub_grp'

export interface IPartyDetailAltIDGrp {
  PartyDetailAltID?: string// [1] 1517 (String)
  PartyDetailAltIDSource?: string// [1] 1518 (String)
  PartyDetailAltSubGrp?: IPartyDetailAltSubGrp[]// [1] ID.1520, Typ.139
}
