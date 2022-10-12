import { IInstrument } from './instrument'
import { IDerivativeSecurityListNoRelatedSymNoLegs } from './derivative_security_list_no_related_sym_no_legs'

export interface IDerivativeSecurityListNoRelatedSym {
  Instrument?: IInstrument// [1] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  Currency?: string// [2] 15 (String)
  NoLegs?: IDerivativeSecurityListNoRelatedSymNoLegs[]// [3] LegSymbol.600, LegSymbolSfx.601 .. LegCurrency.556
  TradingSessionID?: string// [4] 336 (String)
  TradingSessionSubID?: string// [5] 625 (String)
  Text?: string// [6] 58 (String)
  EncodedTextLen?: number// [7] 354 (Length)
  EncodedText?: Buffer// [8] 355 (RawData)
}
