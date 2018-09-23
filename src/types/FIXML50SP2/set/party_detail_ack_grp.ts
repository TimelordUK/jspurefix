import { IPartyDetailGrp } from './party_detail_grp'

export interface IPartyDetailAckGrp {
  ListUpdateAction?: string// 1324
  MDStatisticStatus?: number// 2477
  EntitlementResult?: number// 1884
  RejectText?: string// 1328
  EncodedRejectTextLen?: string// 1664
  EncodedRejectText?: Buffer// 1665
  PartyDetailGrp?: IPartyDetailGrp[]
}
