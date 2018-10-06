import { IStandardHeader } from './set/standard_header'
import { IApplIDReportGrp } from './set/appl_id_report_grp'

/*
************************************************************
* ApplicationMessageReport can be found in Volume 1 of the *
*                                                          *
* specification                                            *
************************************************************
*/
export interface IApplicationMessageReport {
  ApplReportID: string// 1356
  ApplReqID?: string// 1346
  ApplReportType: number// 1426
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  ApplIDReportGrp?: IApplIDReportGrp[]
}
