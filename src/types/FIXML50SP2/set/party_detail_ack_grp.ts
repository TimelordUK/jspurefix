import { IPartyDetailGrp } from './party_detail_grp'

export interface IPartyDetailAckGrp {
  ListUpdateAction?: string// [1] 1324 (String)
  PartyDetailDefinitionStatus?: number// [1] 1879 (Int)
  PartyDetailDefinitionResult?: number// [1] 1880 (Int)
  RejectText?: string// [1] 1328 (String)
  EncodedRejectTextLen?: number// [1] 1664 (Length)
  EncodedRejectText?: Buffer// [1] 1665 (RawData)
  PartyDetailGrp?: IPartyDetailGrp[]// [1] ID.1691, Src.1692 .. Stat.1672
}
