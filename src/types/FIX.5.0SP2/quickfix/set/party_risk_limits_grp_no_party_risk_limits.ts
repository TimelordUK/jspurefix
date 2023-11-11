import { IPartyDetailGrp } from './party_detail_grp'
import { IRiskLimitsGrp } from './risk_limits_grp'

export interface IPartyRiskLimitsGrpNoPartyRiskLimits {
  PartyDetailGrp?: IPartyDetailGrp// [1] NoPartyDetails.1671, PartyDetailID.1691 .. PartyDetailStatus.1672
  RiskLimitsGrp?: IRiskLimitsGrp// [2] NoRiskLimits.1669, NoRiskLimits.1529 .. RiskInstrumentMultiplier.1558
  RiskLimitID?: string// [3] 1670 (String)
  RiskLimitCheckModelType?: number// [4] 2339 (Int)
  PartyRiskLimitStatus?: number// [5] 2355 (Int)
}
