import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'

/*
****************************************************
* MarketDataReport can be found in Volume 3 of the *
*                                                  *
* specification                                    *
****************************************************
*/
export interface IMarketDataReport {
  MDReportID?: number// [2] 963 (Int)
  MDReportEvent: number// [2] 2535 (Int)
  MDReportCount: number// [2] 2536 (Int)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  TotNumReports?: number// [2] 911 (Int)
  TotNoMarketSegmentReports?: number// [2] 2537 (Int)
  TotNoInstrumentReports?: number// [2] 2538 (Int)
  TotNoPartyDetailReports?: number// [2] 2539 (Int)
  TotNoEntitlementReports?: number// [2] 2540 (Int)
  TotNoRiskLimitReports?: number// [2] 2541 (Int)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
}
