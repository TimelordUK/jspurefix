import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IPartyRiskLimitsGrp } from './set/party_risk_limits_grp'

/*
*********************************************************
* PartyRiskLimitsReport can be found in Volume 3 of the *
*                                                       *
* specification                                         *
*********************************************************
*/
export interface IPartyRiskLimitsReport {
  RiskLimitReportID: string// 1667
  RiskLimitRequestID?: string// 1666
  RiskLimitRequestType?: number// 1760
  MDStatisticRequestResult?: number// 2473
  UnsolicitedIndicator?: boolean// 325
  TotNoParties?: number// 1512
  LastFragment?: boolean// 893
  TransactTime?: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  RejectText?: string// 1328
  EncodedRejectTextLen?: number// 1664
  EncodedRejectText?: Buffer// 1665
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  PartyRiskLimitsGrp?: IPartyRiskLimitsGrp[]
}
