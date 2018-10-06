import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'

/*
*******************************************************
* CollateralReportAck can be found in Volume 5 of the *
*                                                     *
* specification                                       *
*******************************************************
*/
export interface ICollateralReportAck {
  CollRptID: string// 908
  TransactTime?: Date// 60
  CollRptStatus: number// 2488
  OrdRejReason?: number// 103
  RejectText?: string// 1328
  EncodedRejectTextLen?: number// 1664
  EncodedRejectText?: Buffer// 1665
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
}
