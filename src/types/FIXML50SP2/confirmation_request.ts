import { IStandardHeader } from './set/standard_header'
import { IOrdAllocGrp } from './set/ord_alloc_grp'

/*
*******************************************************
* ConfirmationRequest can be found in Volume 5 of the *
*                                                     *
* specification                                       *
*******************************************************
*/
export interface IConfirmationRequest {
  ConfirmReqID: string// [2] 859 (String)
  ConfirmType: number// [2] 773 (Int)
  AllocID?: string// [2] 70 (String)
  SecondaryAllocID?: string// [2] 793 (String)
  IndividualAllocID?: string// [2] 467 (String)
  TransactTime: Date// [2] 60 (UtcTimestamp)
  AllocAccount?: string// [2] 79 (String)
  AllocAcctIDSource?: number// [2] 661 (Int)
  AllocAccountType?: number// [2] 798 (Int)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  OrdAllocGrp?: IOrdAllocGrp[]// [2] ClOrdID.11, OrdID.37 .. BkngQty.800
}
