import { IStandardHeader } from './set/standard_header'

/*
*************************************************************
* StreamAssignmentReportACK can be found in Volume 3 of the *
*                                                           *
* specification                                             *
*************************************************************
*/
export interface IStreamAssignmentReportACK {
  StreamAsgnAckType: number// [2] 1503 (Int)
  StreamAsgnRptID: string// [2] 1501 (String)
  OrdRejReason?: number// [2] 103 (Int)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
}
