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
  ApplReportID: string// [2] 1356 (String)
  ApplReqID?: string// [2] 1346 (String)
  ApplReportType: number// [2] 1426 (Int)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  ApplIDReportGrp?: IApplIDReportGrp[]// [2] RefApplID.1355, ApplNewSeqNum.1399, RefApplLastSeqNum.1357
}
