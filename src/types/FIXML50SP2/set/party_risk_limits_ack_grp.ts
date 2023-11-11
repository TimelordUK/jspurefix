import { IPartyDetailGrp } from './party_detail_grp'
import { IRiskLimitsGrp } from './risk_limits_grp'

export interface IPartyRiskLimitsAckGrp {
  ListUpdateAction?: string// [1] 1324 (String)
  RiskLimitStatus?: number// [1] 1763 (Int)
  RiskLimitResult?: number// [1] 1764 (Int)
  RiskLimitID?: string// [1] 1670 (String)
  RiskLimitCheckModelType?: number// [1] 2339 (Int)
  RejectText?: string// [1] 1328 (String)
  EncodedRejectTextLen?: number// [1] 1664 (Length)
  EncodedRejectText?: Buffer// [1] 1665 (RawData)
  PartyRiskLimitStatus?: number// [1] 2355 (Int)
  PartyDetailGrp?: IPartyDetailGrp[]// [1] ID.1691, Src.1692 .. Stat.1672
  RiskLimitsGrp?: IRiskLimitsGrp[]// [2] 
}
