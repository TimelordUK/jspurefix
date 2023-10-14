import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
************************************************************
* This message is used to respond to the Stream Assignment *
* Report, to either accept or reject an unsolicited        *
* assingment.                                              *
************************************************************
*/
export interface IStreamAssignmentReportACK {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  StreamAsgnAckType: number// [2] 1503 (Int)
  StreamAsgnRptID: string// [3] 1501 (String)
  StreamAsgnRejReason?: number// [4] 1502 (Int)
  Text?: string// [5] 58 (String)
  EncodedTextLen?: number// [6] 354 (Int)
  EncodedText?: Buffer// [7] 355 (RawData)
  StandardTrailer: IStandardTrailer// [8] SignatureLength.93, Signature.89, CheckSum.10
}
