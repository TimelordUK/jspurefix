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
  StandardHeader: IStandardHeader
  BeginSeqNo: number// 7
  EndSeqNo: number// 16
  StandardTrailer: IStandardTrailer
}
