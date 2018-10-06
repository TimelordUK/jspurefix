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
  MDReportID?: number// 963
  MDReportEvent: number// 2535
  MDReportCount: number// 2536
  TransactTime?: Date// 60
  TotNumReports?: number// 911
  TotNoMarketSegmentReports?: number// 2537
  TotNoInstrumentReports?: number// 2538
  TotNoPartyDetailReports?: number// 2539
  TotNoEntitlementReports?: number// 2540
  TotNoRiskLimitReports?: number// 2541
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
}
