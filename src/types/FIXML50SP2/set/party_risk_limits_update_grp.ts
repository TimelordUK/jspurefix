import { IPartyDetailGrp } from './party_detail_grp'
import { IRiskLimitsGrp } from './risk_limits_grp'

export interface IPartyRiskLimitsUpdateGrp {
  ListUpdateAction?: string// [1] 1324 (String)
  RiskLimitID?: string// [1] 1670 (String)
  RiskLimitCheckModelType?: number// [1] 2339 (Int)
  PartyRiskLimitStatus?: number// [1] 2355 (Int)
  PartyDetailGrp?: IPartyDetailGrp[]// [1] ID.1691, Src.1692 .. Stat.1672
  RiskLimitsGrp?: IRiskLimitsGrp[]// [2] 
}
