import { IStandardHeader } from './set/standard_header'

/*
*************************************************************
* StreamAssignmentReportACK can be found in Volume 3 of the *
*                                                           *
* specification                                             *
*************************************************************
*/
export interface IStreamAssignmentReportACK {
  StreamAsgnAckType: number// 1503
  StreamAsgnRptID: string// 1501
  OrdRejReason?: number// 103
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
}
