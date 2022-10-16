import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface IListStatusRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  ListID: string// [2] 66 (String)
  Text?: string// [3] 58 (String)
  EncodedTextLen?: number// [4] 354 (Length)
  EncodedText?: Buffer// [5] 355 (RawData)
  StandardTrailer: IStandardTrailer// [6] SignatureLength.93, Signature.89, CheckSum.10
}
