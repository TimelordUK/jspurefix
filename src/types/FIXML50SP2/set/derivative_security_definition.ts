import { IDerivativeInstrument } from './derivative_instrument'
import { IDerivativeInstrumentAttribute } from './derivative_instrument_attribute'
import { IMarketSegmentGrp } from './market_segment_grp'
import { ISecurityClassificationGrp } from './security_classification_grp'

export interface IDerivativeSecurityDefinition {
  DerivativeInstrument?: IDerivativeInstrument
  DerivativeInstrumentAttribute?: IDerivativeInstrumentAttribute[]
  MarketSegmentGrp?: IMarketSegmentGrp[]
  SecurityClassificationGrp?: ISecurityClassificationGrp[]
}
