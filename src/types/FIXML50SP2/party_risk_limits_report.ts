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
  RiskLimitReportID: string// [2] 1667 (String)
  RiskLimitRequestID?: string// [2] 1666 (String)
  RiskLimitRequestType?: number// [2] 1760 (Int)
  SecurityRequestResult?: number// [2] 560 (Int)
  UnsolicitedIndicator?: boolean// [2] 325 (Boolean)
  TotNoParties?: number// [2] 1512 (Int)
  LastFragment?: boolean// [2] 893 (Boolean)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  RejectText?: string// [2] 1328 (String)
  EncodedRejectTextLen?: number// [2] 1664 (Length)
  EncodedRejectText?: Buffer// [2] 1665 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  PartyRiskLimitsGrp?: IPartyRiskLimitsGrp[]// [3] ID.1670, ChkModelTyp.2339, PtyRiskLmtStat.2355
}
