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
  RiskLimitReportID: string// [2] 1667 (String)
  RiskLimitRequestID?: string// [2] 1666 (String)
  RiskLimitReportStatus: number// [2] 2316 (Int)
  RiskLimitReportRejectReason?: number// [2] 2317 (Int)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  RejectText?: string// [2] 1328 (String)
  EncodedRejectTextLen?: number// [2] 1664 (Length)
  EncodedRejectText?: Buffer// [2] 1665 (RawData)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  PartyRiskLimitsUpdateGrp?: IPartyRiskLimitsUpdateGrp[]// [2] ListUpdActn.1324, ID.1670 .. PtyRiskLmtStat.2355
}
