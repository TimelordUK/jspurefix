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
  MDStatisticRptID: string// 2453
  RelSymTransactTime?: Date// 1504
  CollRptStatus: number// 2488
  CollRptRejectReason?: number// 2487
  RejectText?: string// 1328
  EncodedRejectTextLen?: string// 1664
  EncodedRejectText?: Buffer// 1665
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
}
