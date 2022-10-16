import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface ILogout {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [3] 354 (Length)
  EncodedText?: Buffer// [4] 355 (RawData)
  StandardTrailer: IStandardTrailer// [5] SignatureLength.93, Signature.89, CheckSum.10
}
