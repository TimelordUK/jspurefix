import { IInstrument } from './instrument'
import { IInstrumentExtension } from './instrument_extension'
import { ISecondaryPriceLimits } from './secondary_price_limits'
import { IInstrmtLegGrp } from './instrmt_leg_grp'

export interface IRelSymDerivSecUpdGrpNoRelatedSym {
  ListUpdateAction?: string// [1] 1324 (String)
  CorporateAction?: string// [2] 292 (String)
  Instrument?: IInstrument// [3] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [4] DeliveryForm.668, PctAtRisk.869 .. ReferenceDataDateType.2748
  SecondaryPriceLimits?: ISecondaryPriceLimits// [5] SecondaryPriceLimitType.1305, SecondaryLowLimitPrice.1221 .. SecondaryTradingReferencePrice.1240
  Currency?: string// [6] 15 (String)
  CurrencyCodeSource?: string// [7] 2897 (String)
  InstrmtLegGrp?: IInstrmtLegGrp// [8] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  RelSymTransactTime?: Date// [9] 1504 (UtcTimestamp)
  Text?: string// [10] 58 (String)
  EncodedTextLen?: number// [11] 354 (Length)
  EncodedText?: Buffer// [12] 355 (RawData)
}
