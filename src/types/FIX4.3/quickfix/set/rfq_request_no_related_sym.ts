import { IInstrument } from './instrument'

export interface IRFQRequestNoRelatedSym {
  Instrument: IInstrument// [1] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  PrevClosePx?: number// [2] 140 (Float)
  QuoteRequestType?: number// [3] 303 (Int)
  QuoteType?: number// [4] 537 (Int)
  TradingSessionID?: string// [5] 336 (String)
  TradingSessionSubID?: string// [6] 625 (String)
}
