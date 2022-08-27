import { IStandardHeader } from './set/standard_header'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IStandardTrailer } from './set/standard_trailer'

export interface IDerivativeSecurityListRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  SecurityReqID: string// [2] 320 (String)
  SecurityListRequestType: number// [3] 559 (Int)
  UnderlyingInstrument?: IUnderlyingInstrument// [4] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingStipValue.889
  SecuritySubType?: string// [5] 762 (String)
  Currency?: string// [6] 15 (String)
  Text?: string// [7] 58 (String)
  EncodedTextLen?: number// [8] 354 (Length)
  EncodedText?: Buffer// [9] 355 (RawData)
  TradingSessionID?: string// [10] 336 (String)
  TradingSessionSubID?: string// [11] 625 (String)
  SubscriptionRequestType?: string// [12] 263 (String)
  StandardTrailer: IStandardTrailer// [13] SignatureLength.93, Signature.89, CheckSum.10
}
