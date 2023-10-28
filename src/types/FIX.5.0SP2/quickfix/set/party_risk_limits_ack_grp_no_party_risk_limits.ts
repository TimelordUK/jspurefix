import { IPartyDetailGrp } from './party_detail_grp'
import { IRiskLimitsGrp } from './risk_limits_grp'

export interface IPartyRiskLimitsAckGrpNoPartyRiskLimits {
  ListUpdateAction?: string// [1] 1324 (String)
  RiskLimitStatus?: number// [2] 1763 (Int)
  RiskLimitResult?: number// [3] 1764 (Int)
  PartyDetailGrp?: IPartyDetailGrp// [4] NoPartyDetails.1671, PartyDetailID.1691 .. PartyDetailStatus.1672
  RiskLimitsGrp?: IRiskLimitsGrp// [5] NoRiskLimits.1669, NoRiskLimits.1529 .. RiskInstrumentMultiplier.1558
  RiskLimitID?: string// [6] 1670 (String)
  RiskLimitCheckModelType?: number// [7] 2339 (Int)
  RejectText?: string// [8] 1328 (String)
  EncodedRejectTextLen?: number// [9] 1664 (Length)
  EncodedRejectText?: Buffer// [10] 1665 (RawData)
  PartyRiskLimitStatus?: number// [11] 2355 (Int)
}
