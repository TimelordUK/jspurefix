import { IDerivativeInstrument } from './derivative_instrument'
import { IDerivativeInstrumentAttribute } from './derivative_instrument_attribute'
import { IMarketSegmentGrp } from './market_segment_grp'
import { ISecurityClassificationGrp } from './security_classification_grp'

export interface IDerivativeSecurityDefinition {
  DerivativeInstrument?: IDerivativeInstrument// [1] DerivativeSymbol.1214, DerivativeSymbolSfx.1215 .. DerivativeInstrumentPartySubIDType.1298
  DerivativeInstrumentAttribute?: IDerivativeInstrumentAttribute// [2] NoDerivativeInstrAttrib.1311, DerivativeInstrAttribType.1313, DerivativeInstrAttribValue.1314
  MarketSegmentGrp?: IMarketSegmentGrp// [3] NoMarketSegments.1310, MarketID.1301 .. MaturityMonthYearIncrement.1229
  SecurityClassificationGrp?: ISecurityClassificationGrp// [4] NoSecurityClassifications.1582, SecurityClassificationReason.1583, SecurityClassificationValue.1584
}
