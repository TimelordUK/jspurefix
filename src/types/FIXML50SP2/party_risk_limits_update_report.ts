import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IPartyRiskLimitsUpdateGrp } from './set/party_risk_limits_update_grp'

/*
***************************************************************
* PartyRiskLimitsUpdateReport can be found in Volume 3 of the *
*                                                             *
* specification                                               *
***************************************************************
*/
export interface IPartyRiskLimitsUpdateReport {
  RiskLimitReportID: string// 1667
  RiskLimitRequestID?: string// 1666
  RiskLimitRequestType?: number// 1760
  TotNoParties?: number// 1512
  LastFragment?: boolean// 893
  TransactTime?: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  RequestingPartyGrp?: IRequestingPartyGrp[]
  PartyRiskLimitsUpdateGrp?: IPartyRiskLimitsUpdateGrp[]
}
