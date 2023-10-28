import { IStandardHeader } from './set/standard_header'
import { IApplIDReportGrp } from './set/appl_id_report_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IApplicationMessageReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplReportID: string// [2] 1356 (String)
  ApplReqID?: string// [3] 1346 (String)
  ApplReportType: number// [4] 1426 (Int)
  ApplIDReportGrp?: IApplIDReportGrp// [5] NoApplIDs.1351, RefApplID.1355 .. RefApplLastSeqNum.1357
  Text?: string// [6] 58 (String)
  EncodedTextLen?: number// [7] 354 (Length)
  EncodedText?: Buffer// [8] 355 (RawData)
  StandardTrailer: IStandardTrailer// [9] SignatureLength.93, Signature.89, CheckSum.10
}
