import { IPartyDetailGrp } from './party_detail_grp'
import { IRiskLimitsGrp } from './risk_limits_grp'

export interface IPartyRiskLimitsAckGrp {
  ListUpdateAction?: string// 1324
  MDStatisticStatus?: number// 2477
  EntitlementResult?: number// 1884
  RiskLimitID?: string// 1670
  RiskLimitCheckModelType?: number// 2339
  RejectText?: string// 1328
  EncodedRejectTextLen?: string// 1664
  EncodedRejectText?: Buffer// 1665
  PartyRiskLimitStatus?: number// 2355
  PartyDetailGrp?: IPartyDetailGrp[]
  RiskLimitsGrp?: IRiskLimitsGrp[]
}
