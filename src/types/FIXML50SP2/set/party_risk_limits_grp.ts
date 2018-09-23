import { IPartyDetailGrp } from './party_detail_grp'
import { IRiskLimitsGrp } from './risk_limits_grp'

export interface IPartyRiskLimitsGrp {
  RiskLimitID?: string// 1670
  RiskLimitCheckModelType?: number// 2339
  PartyRiskLimitStatus?: number// 2355
  PartyDetailGrp?: IPartyDetailGrp[]
  RiskLimitsGrp?: IRiskLimitsGrp[]
}
