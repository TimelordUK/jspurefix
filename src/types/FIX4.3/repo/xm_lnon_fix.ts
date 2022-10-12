import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface IXMLnonFIX {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  StandardTrailer: IStandardTrailer// [2] SignatureLength.93, Signature.89, CheckSum.10
}
