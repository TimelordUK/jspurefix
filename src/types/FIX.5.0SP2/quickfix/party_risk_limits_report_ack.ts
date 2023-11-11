import { IStandardHeader } from './set/standard_header'
import { IPartyRiskLimitsUpdateGrp } from './set/party_risk_limits_update_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IPartyRiskLimitsReportAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  RiskLimitReportID: string// [2] 1667 (String)
  RiskLimitRequestID?: string// [3] 1666 (String)
  RiskLimitReportStatus: number// [4] 2316 (Int)
  RiskLimitReportRejectReason?: number// [5] 2317 (Int)
  PartyRiskLimitsUpdateGrp?: IPartyRiskLimitsUpdateGrp// [6] NoPartyRiskLimits.1677, ListUpdateAction.1324 .. PartyRiskLimitStatus.2355
  TransactTime?: Date// [7] 60 (UtcTimestamp)
  RejectText?: string// [8] 1328 (String)
  EncodedRejectTextLen?: number// [9] 1664 (Length)
  EncodedRejectText?: Buffer// [10] 1665 (RawData)
  Text?: string// [11] 58 (String)
  EncodedTextLen?: number// [12] 354 (Length)
  EncodedText?: Buffer// [13] 355 (RawData)
  StandardTrailer: IStandardTrailer// [14] SignatureLength.93, Signature.89, CheckSum.10
}
