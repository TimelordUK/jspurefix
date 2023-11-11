import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IPartyRiskLimitsUpdateGrp } from './set/party_risk_limits_update_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IPartyRiskLimitsUpdateReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  RiskLimitReportID: string// [3] 1667 (String)
  RiskLimitRequestID?: string// [4] 1666 (String)
  RiskLimitRequestType?: number// [5] 1760 (Int)
  TotNoParties?: number// [6] 1512 (Int)
  LastFragment?: boolean// [7] 893 (Boolean)
  RequestingPartyGrp?: IRequestingPartyGrp// [8] NoRequestingPartyIDs.1657, RequestingPartyID.1658 .. RequestingPartySubIDType.1663
  PartyRiskLimitsUpdateGrp?: IPartyRiskLimitsUpdateGrp// [9] NoPartyRiskLimits.1677, ListUpdateAction.1324 .. PartyRiskLimitStatus.2355
  TransactTime?: Date// [10] 60 (UtcTimestamp)
  Text?: string// [11] 58 (String)
  EncodedTextLen?: number// [12] 354 (Length)
  EncodedText?: Buffer// [13] 355 (RawData)
  StandardTrailer: IStandardTrailer// [14] SignatureLength.93, Signature.89, CheckSum.10
}
