import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityListRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  SecurityReqID: string// [2] 320 (String)
  SecurityListRequestType: number// [3] 559 (Int)
  Instrument?: IInstrument// [4] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  Currency?: string// [5] 15 (String)
  Text?: string// [6] 58 (String)
  EncodedTextLen?: number// [7] 354 (Length)
  EncodedText?: Buffer// [8] 355 (RawData)
  TradingSessionID?: string// [9] 336 (String)
  TradingSessionSubID?: string// [10] 625 (String)
  SubscriptionRequestType?: string// [11] 263 (String)
  StandardTrailer: IStandardTrailer// [12] SignatureLength.93, Signature.89, CheckSum.10
}
