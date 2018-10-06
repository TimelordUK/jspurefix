import { IStandardHeader } from './set/standard_header'
import { IPartyRiskLimitsUpdateGrp } from './set/party_risk_limits_update_grp'

/*
************************************************************
* PartyRiskLimitsReportAck can be found in Volume 3 of the *
*                                                          *
* specification                                            *
************************************************************
*/
export interface IPartyRiskLimitsReportAck {
  RiskLimitReportID: string// 1667
  RiskLimitRequestID?: string// 1666
  RiskLimitReportStatus: number// 2316
  RiskLimitReportRejectReason?: number// 2317
  TransactTime?: Date// 60
  RejectText?: string// 1328
  EncodedRejectTextLen?: number// 1664
  EncodedRejectText?: Buffer// 1665
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  PartyRiskLimitsUpdateGrp?: IPartyRiskLimitsUpdateGrp[]
}
