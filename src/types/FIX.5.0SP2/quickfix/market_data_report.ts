import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IStandardTrailer } from './set/standard_trailer'

export interface IMarketDataReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  MDReportID?: number// [3] 963 (Int)
  MDReportEvent: number// [4] 2535 (Int)
  MDReportCount: number// [5] 2536 (Int)
  TransactTime?: Date// [6] 60 (UtcTimestamp)
  TotNumReports?: number// [7] 911 (Int)
  TotNoMarketSegmentReports?: number// [8] 2537 (Int)
  TotNoInstrumentReports?: number// [9] 2538 (Int)
  TotNoPartyDetailReports?: number// [10] 2539 (Int)
  TotNoEntitlementReports?: number// [11] 2540 (Int)
  TotNoRiskLimitReports?: number// [12] 2541 (Int)
  StandardTrailer: IStandardTrailer// [13] SignatureLength.93, Signature.89, CheckSum.10
}
