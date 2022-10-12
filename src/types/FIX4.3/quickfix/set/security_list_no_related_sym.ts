import { IInstrument } from './instrument'
import { ISecurityListNoRelatedSymNoLegs } from './security_list_no_related_sym_no_legs'

export interface ISecurityListNoRelatedSym {
  Instrument?: IInstrument// [1] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  Currency?: string// [2] 15 (String)
  NoLegs?: ISecurityListNoRelatedSymNoLegs[]// [3] LegSymbol.600, LegSymbolSfx.601 .. LegCurrency.556
  RoundLot?: number// [4] 561 (Float)
  MinTradeVol?: number// [5] 562 (Float)
  TradingSessionID?: string// [6] 336 (String)
  TradingSessionSubID?: string// [7] 625 (String)
  Text?: string// [8] 58 (String)
  EncodedTextLen?: number// [9] 354 (Length)
  EncodedText?: Buffer// [10] 355 (RawData)
}
