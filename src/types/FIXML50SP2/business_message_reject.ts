import { IStandardHeader } from './set/standard_header'

/*
*********************************************************
* BusinessMessageReject can be found in Volume 1 of the *
*                                                       *
* specification                                         *
*********************************************************
*/
export interface IBusinessMessageReject {
  RefSeqNum?: string// 45
  RefMsgType: string// 372
  RefApplVerID?: string// 1130
  RefApplExtID?: number// 1406
  RefCstmApplVerID?: string// 1131
  BusinessRejectRefID?: string// 379
  BusinessRejectReason: number// 380
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
}
