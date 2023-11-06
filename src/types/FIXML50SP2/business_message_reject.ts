import { IStandardHeader } from './set/standard_header'

/*
*********************************************************
* BusinessMessageReject can be found in Volume 1 of the *
*                                                       *
* specification                                         *
*********************************************************
*/
export interface IBusinessMessageReject {
  RefSeqNum?: number// [2] 45 (Int)
  RefMsgType: string// [2] 372 (String)
  RefApplVerID?: string// [2] 1130 (String)
  RefApplExtID?: number// [2] 1406 (Int)
  RefCstmApplVerID?: string// [2] 1131 (String)
  BusinessRejectRefID?: string// [2] 379 (String)
  BusinessRejectReason: number// [2] 380 (Int)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
}
