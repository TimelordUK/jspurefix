import { IStandardHeader } from './set/standard_header'

/*
*********************************************************
* BusinessMessageReject can be found in Volume 1 of the *
*                                                       *
* specification                                         *
*********************************************************
*/
export interface IBusinessMessageReject {
  RefSeqNum?: number// 45
  RefMsgType: string// 372
  RefApplVerID?: string// 1130
  RefApplExtID?: number// 1406
  RefCstmApplVerID?: string// 1131
  BusinessRejectRefID?: string// 379
  BusinessRejectReason: number// 380
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
}
