import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The list cancel request message type is used by institutions *
* wishing to cancel previously submitted lists either before   *
* or during execution.                                         *
****************************************************************
*/
export interface IListCancelRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  ListID: string// [2] 66 (String)
  TransactTime: Date// [3] 60 (UtcTimestamp)
  Text?: string// [4] 58 (String)
  EncodedTextLen?: number// [5] 354 (Int)
  EncodedText?: Buffer// [6] 355 (RawData)
  StandardTrailer: IStandardTrailer// [7] SignatureLength.93, Signature.89, CheckSum.10
}
