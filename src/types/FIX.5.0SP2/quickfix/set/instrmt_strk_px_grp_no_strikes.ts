import { IInstrument } from './instrument'
import { IUndInstrmtGrp } from './und_instrmt_grp'

export interface IInstrmtStrkPxGrpNoStrikes {
  Instrument?: IInstrument// [1] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  UndInstrmtGrp?: IUndInstrmtGrp// [2] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  PrevClosePx?: number// [3] 140 (Float)
  ClOrdID?: string// [4] 11 (String)
  SecondaryClOrdID?: string// [5] 526 (String)
  Side?: string// [6] 54 (String)
  Price?: number// [7] 44 (Float)
  Currency?: string// [8] 15 (String)
  CurrencyCodeSource?: string// [9] 2897 (String)
  Text?: string// [10] 58 (String)
  EncodedTextLen?: number// [11] 354 (Length)
  EncodedText?: Buffer// [12] 355 (RawData)
}
