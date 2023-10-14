import { IInstrument } from './instrument'
import { IInstrumentExtension } from './instrument_extension'
import { ISecondaryPriceLimits } from './secondary_price_limits'
import { IInstrmtLegGrp } from './instrmt_leg_grp'

export interface IRelSymDerivSecUpdGrp {
  ListUpdateAction?: string// [1] 1324 (String)
  CorporateAction?: string// [2] 292 (String)
  Instrument?: IInstrument// [3] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  InstrumentExtension?: IInstrumentExtension// [4] DeliveryForm.668, PctAtRisk.869 .. InstrAttribValue.872
  SecondaryPriceLimits?: ISecondaryPriceLimits// [5] SecondaryPriceLimitType.1305, SecondaryLowLimitPrice.1221 .. SecondaryTradingReferencePrice.1240
  Currency?: string// [6] 15 (String)
  InstrmtLegGrp?: IInstrmtLegGrp// [7] NoLegs.555, LegSymbol.600 .. LegFlowScheduleType.1440
  Text?: string// [8] 58 (String)
  EncodedTextLen?: number// [9] 354 (Int)
  EncodedText?: Buffer// [10] 355 (RawData)
  RelSymTransactTime?: Date// [11] 1504 (UtcTimestamp)
}
