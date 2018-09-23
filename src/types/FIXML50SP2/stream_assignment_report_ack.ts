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
  MDStatisticRptID: string// 2453
  CollRptRejectReason?: number// 2487
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
}
