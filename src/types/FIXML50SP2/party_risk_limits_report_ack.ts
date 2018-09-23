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
  MDStatisticRptID: string// 2453
  MDStatisticReqID?: string// 2452
  CollRptStatus: number// 2488
  CollRptRejectReason?: number// 2487
  RelSymTransactTime?: Date// 1504
  RejectText?: string// 1328
  EncodedRejectTextLen?: string// 1664
  EncodedRejectText?: Buffer// 1665
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  PartyRiskLimitsUpdateGrp?: IPartyRiskLimitsUpdateGrp[]
}
