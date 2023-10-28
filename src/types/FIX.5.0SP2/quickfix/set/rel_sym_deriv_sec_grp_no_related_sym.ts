import { IInstrument } from './instrument'
import { ISecondaryPriceLimits } from './secondary_price_limits'
import { IInstrumentExtension } from './instrument_extension'
import { IInstrmtLegGrp } from './instrmt_leg_grp'

export interface IRelSymDerivSecGrpNoRelatedSym {
  Instrument?: IInstrument// [1] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  SecondaryPriceLimits?: ISecondaryPriceLimits// [2] SecondaryPriceLimitType.1305, SecondaryLowLimitPrice.1221 .. SecondaryTradingReferencePrice.1240
  Currency?: string// [3] 15 (String)
  CurrencyCodeSource?: string// [4] 2897 (String)
  CorporateAction?: string// [5] 292 (String)
  InstrumentExtension?: IInstrumentExtension// [6] DeliveryForm.668, PctAtRisk.869 .. ReferenceDataDateType.2748
  InstrmtLegGrp?: IInstrmtLegGrp// [7] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  RelSymTransactTime?: Date// [8] 1504 (UtcTimestamp)
  NumOfSimpleInstruments?: number// [9] 1606 (Int)
  Text?: string// [10] 58 (String)
  EncodedTextLen?: number// [11] 354 (Length)
  EncodedText?: Buffer// [12] 355 (RawData)
}
