import { IStandardHeader } from './set/standard_header'
import { IApplIDReportGrp } from './set/appl_id_report_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* This message is used for three difference purposes: to reset *
* the ApplSeqNum (1181) of a specified ApplID (1180). to       *
* indicate that the last message has been sent for a           *
* particular ApplID, or as a keep-alive mechanism for ApplIDs  *
* with infrequent message traffic.                             *
****************************************************************
*/
export interface IApplicationMessageReport {
  StandardHeader: IStandardHeader
  ApplReportID: string// 1356
  ApplReportType: number// 1426
  ApplIDReportGrp?: IApplIDReportGrp[]
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
  ApplReqID?: string// 1346
}
