import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityTypeRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  SecurityReqID: string// [2] 320 (String)
  Text?: string// [3] 58 (String)
  EncodedTextLen?: number// [4] 354 (Length)
  EncodedText?: Buffer// [5] 355 (RawData)
  TradingSessionID?: string// [6] 336 (String)
  TradingSessionSubID?: string// [7] 625 (String)
  StandardTrailer: IStandardTrailer// [8] SignatureLength.93, Signature.89, CheckSum.10
}
