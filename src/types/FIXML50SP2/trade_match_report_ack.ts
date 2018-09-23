import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'

/*
*******************************************************
* TradeMatchReportAck can be found in Volume 5 of the *
*                                                     *
* specification                                       *
*******************************************************
*/
export interface ITradeMatchReportAck {
  TradeMatchID: string// 1
  TradeMatchAckStatus: number// 1896
  CollRptRejectReason?: number// 2487
  RejectText?: string// 1328
  EncodedRejectTextLen?: string// 1664
  EncodedRejectText?: Buffer// 1665
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
}
