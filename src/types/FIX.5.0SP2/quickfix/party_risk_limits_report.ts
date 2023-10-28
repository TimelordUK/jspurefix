import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IPartyRiskLimitsGrp } from './set/party_risk_limits_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IPartyRiskLimitsReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  RiskLimitReportID: string// [3] 1667 (String)
  RiskLimitRequestID?: string// [4] 1666 (String)
  RiskLimitRequestType?: number// [5] 1760 (Int)
  RequestResult?: number// [6] 1511 (Int)
  UnsolicitedIndicator?: boolean// [7] 325 (Boolean)
  TotNoParties?: number// [8] 1512 (Int)
  LastFragment?: boolean// [9] 893 (Boolean)
  PartyRiskLimitsGrp?: IPartyRiskLimitsGrp// [10] NoPartyRiskLimits.1677, NoPartyRiskLimits.1671 .. PartyRiskLimitStatus.2355
  TransactTime?: Date// [11] 60 (UtcTimestamp)
  Text?: string// [12] 58 (String)
  EncodedTextLen?: number// [13] 354 (Length)
  EncodedText?: Buffer// [14] 355 (RawData)
  RejectText?: string// [15] 1328 (String)
  EncodedRejectTextLen?: number// [16] 1664 (Length)
  EncodedRejectText?: Buffer// [17] 1665 (RawData)
  StandardTrailer: IStandardTrailer// [18] SignatureLength.93, Signature.89, CheckSum.10
}
