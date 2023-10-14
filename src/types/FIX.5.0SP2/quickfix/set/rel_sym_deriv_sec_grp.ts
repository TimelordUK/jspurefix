import { IInstrument } from './instrument'
import { ISecondaryPriceLimits } from './secondary_price_limits'
import { IInstrumentExtension } from './instrument_extension'
import { IInstrmtLegGrp } from './instrmt_leg_grp'

export interface IRelSymDerivSecGrp {
  Instrument?: IInstrument// [1] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  SecondaryPriceLimits?: ISecondaryPriceLimits// [2] SecondaryPriceLimitType.1305, SecondaryLowLimitPrice.1221 .. SecondaryTradingReferencePrice.1240
  Currency?: string// [3] 15 (String)
  CorporateAction?: string// [4] 292 (String)
  InstrumentExtension?: IInstrumentExtension// [5] DeliveryForm.668, PctAtRisk.869 .. InstrAttribValue.872
  InstrmtLegGrp?: IInstrmtLegGrp// [6] NoLegs.555, LegSymbol.600 .. LegFlowScheduleType.1440
  Text?: string// [7] 58 (String)
  EncodedTextLen?: number// [8] 354 (Int)
  EncodedText?: Buffer// [9] 355 (RawData)
  RelSymTransactTime?: Date// [10] 1504 (UtcTimestamp)
}
