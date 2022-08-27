import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The resend request is sent by the receiving application to *
* initiate the retransmission of messages. This function is  *
* utilized if a sequence number gap is detected, if the      *
* receiving application lost a message, or as a function of  *
* the initialization process.                                *
**************************************************************
*/
export interface IResendRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  BeginSeqNo: number// [2] 7 (Int)
  EndSeqNo: number// [3] 16 (Int)
  StandardTrailer: IStandardTrailer// [4] SignatureLength.93, Signature.89, CheckSum.10
}
