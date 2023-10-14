import { IStandardHeader } from './set/standard_header'
import { IOrdAllocGrp } from './set/ord_alloc_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
*********************************************************
* The Confirmation Request message is used to request a *
* Confirmation message.                                 *
*********************************************************
*/
export interface IConfirmationRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ConfirmReqID: string// [2] 859 (String)
  ConfirmType: number// [3] 773 (Int)
  OrdAllocGrp?: IOrdAllocGrp[]// [4] ClOrdID.11, OrderID.37 .. OrderBookingQty.800
  AllocID?: string// [5] 70 (String)
  SecondaryAllocID?: string// [6] 793 (String)
  IndividualAllocID?: string// [7] 467 (String)
  TransactTime: Date// [8] 60 (UtcTimestamp)
  AllocAccount?: string// [9] 79 (String)
  AllocAcctIDSource?: number// [10] 661 (Int)
  AllocAccountType?: number// [11] 798 (Int)
  Text?: string// [12] 58 (String)
  EncodedTextLen?: number// [13] 354 (Int)
  EncodedText?: Buffer// [14] 355 (RawData)
  StandardTrailer: IStandardTrailer// [15] SignatureLength.93, Signature.89, CheckSum.10
}
