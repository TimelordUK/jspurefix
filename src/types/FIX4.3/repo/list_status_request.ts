import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The list status request message type is used by institutions *
* to instruct the broker to generate status messages for a     *
* list.                                                        *
****************************************************************
*/
export interface IListStatusRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  ListID: string// [2] 66 (String)
  Text?: string// [3] 58 (String)
  EncodedTextLen?: number// [4] 354 (Int)
  EncodedText?: Buffer// [5] 355 (RawData)
  StandardTrailer: IStandardTrailer// [6] SignatureLength.93, Signature.89, CheckSum.10
}
