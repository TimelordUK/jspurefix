import { IDerivativeInstrument } from './derivative_instrument'
import { IDerivativeInstrumentAttribute } from './derivative_instrument_attribute'
import { IMarketSegmentGrp } from './market_segment_grp'

export interface IDerivativeSecurityDefinition {
  DerivativeInstrument?: IDerivativeInstrument// [1] DerivativeSymbol.1214, DerivativeSymbolSfx.1215 .. DerivativeFlowScheduleType.1442
  DerivativeInstrumentAttribute?: IDerivativeInstrumentAttribute[]// [2] DerivativeInstrAttribType.1313, DerivativeInstrAttribValue.1314
  MarketSegmentGrp?: IMarketSegmentGrp[]// [3] MarketID.1301, MarketSegmentID.1300 .. MaturityMonthYearIncrement.1229
}
