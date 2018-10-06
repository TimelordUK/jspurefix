import { IPartyDetailGrp } from './party_detail_grp'

export interface IPartyDetailAckGrp {
  ListUpdateAction?: string// 1324
  PartyDetailDefinitionStatus?: number// 1879
  PartyDetailDefinitionResult?: number// 1880
  RejectText?: string// 1328
  EncodedRejectTextLen?: number// 1664
  EncodedRejectText?: Buffer// 1665
  PartyDetailGrp?: IPartyDetailGrp[]
}
