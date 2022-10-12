import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
************************************************************
* The list execute message type is used by institutions to *
* instruct the broker to begin execution of a previously   *
* submitted list.                                          *
************************************************************
*/
export interface IListExecute {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  ListID: string// [2] 66 (String)
  ClientBidID?: string// [3] 391 (String)
  BidID?: string// [4] 390 (String)
  TransactTime: Date// [5] 60 (UtcTimestamp)
  Text?: string// [6] 58 (String)
  EncodedTextLen?: number// [7] 354 (Int)
  EncodedText?: Buffer// [8] 355 (RawData)
  StandardTrailer: IStandardTrailer// [9] SignatureLength.93, Signature.89, CheckSum.10
}
