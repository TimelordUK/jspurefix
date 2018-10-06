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
  StandardHeader: IStandardHeader
  StreamAsgnAckType: number// 1503
  StreamAsgnRptID: string// 1501
  StreamAsgnRejReason?: number// 1502
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
