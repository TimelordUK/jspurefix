import { IStandardHeader } from './set/standard_header'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IDerivativeInstrument } from './set/derivative_instrument'
import { IStandardTrailer } from './set/standard_trailer'

export interface IDerivativeSecurityListRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  SecurityReqID: string// [2] 320 (String)
  SecurityListRequestType: number// [3] 559 (Int)
  MarketID?: string// [4] 1301 (String)
  MarketSegmentID?: string// [5] 1300 (String)
  UnderlyingInstrument?: IUnderlyingInstrument// [6] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingInstrumentXID.2631
  DerivativeInstrument?: IDerivativeInstrument// [7] DerivativeSymbol.1214, DerivativeSymbolSfx.1215 .. DerivativeInstrumentPartySubIDType.1298
  SecuritySubType?: string// [8] 762 (String)
  Currency?: string// [9] 15 (String)
  CurrencyCodeSource?: string// [10] 2897 (String)
  Text?: string// [11] 58 (String)
  EncodedTextLen?: number// [12] 354 (Length)
  EncodedText?: Buffer// [13] 355 (RawData)
  TradingSessionID?: string// [14] 336 (String)
  TradingSessionSubID?: string// [15] 625 (String)
  SubscriptionRequestType?: string// [16] 263 (String)
  StandardTrailer: IStandardTrailer// [17] SignatureLength.93, Signature.89, CheckSum.10
}
