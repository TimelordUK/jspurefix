import { IPartyDetailGrp } from './party_detail_grp'
import { IRiskLimitsGrp } from './risk_limits_grp'

export interface IPartyRiskLimitsUpdateGrpNoPartyRiskLimits {
  ListUpdateAction?: string// [1] 1324 (String)
  PartyDetailGrp?: IPartyDetailGrp// [2] NoPartyDetails.1671, PartyDetailID.1691 .. PartyDetailStatus.1672
  RiskLimitsGrp?: IRiskLimitsGrp// [3] NoRiskLimits.1669, NoRiskLimits.1529 .. RiskInstrumentMultiplier.1558
  RiskLimitID?: string// [4] 1670 (String)
  RiskLimitCheckModelType?: number// [5] 2339 (Int)
  PartyRiskLimitStatus?: number// [6] 2355 (Int)
}
