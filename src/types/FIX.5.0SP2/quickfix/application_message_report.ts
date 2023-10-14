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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplReportID: string// [2] 1356 (String)
  ApplReportType: number// [3] 1426 (Int)
  ApplIDReportGrp?: IApplIDReportGrp[]// [4] RefApplID.1355, ApplNewSeqNum.1399, RefApplLastSeqNum.1357
  Text?: string// [5] 58 (String)
  EncodedTextLen?: number// [6] 354 (Int)
  EncodedText?: Buffer// [7] 355 (RawData)
  StandardTrailer: IStandardTrailer// [8] SignatureLength.93, Signature.89, CheckSum.10
  ApplReqID?: string// [9] 1346 (String)
}
