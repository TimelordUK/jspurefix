import { IPartyDetailGrp } from './party_detail_grp'
import { IRiskLimitsGrp } from './risk_limits_grp'

export interface IPartyRiskLimitsAckGrp {
  ListUpdateAction?: string// 1324
  RiskLimitStatus?: number// 1763
  RiskLimitResult?: number// 1764
  RiskLimitID?: string// 1670
  RiskLimitCheckModelType?: number// 2339
  RejectText?: string// 1328
  EncodedRejectTextLen?: number// 1664
  EncodedRejectText?: Buffer// 1665
  PartyRiskLimitStatus?: number// 2355
  PartyDetailGrp?: IPartyDetailGrp[]
  RiskLimitsGrp?: IRiskLimitsGrp[]
}
