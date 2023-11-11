import { IDerivativeInstrument } from './derivative_instrument'
import { IDerivativeInstrumentAttribute } from './derivative_instrument_attribute'
import { IMarketSegmentGrp } from './market_segment_grp'
import { ISecurityClassificationGrp } from './security_classification_grp'

export interface IDerivativeSecurityDefinition {
  DerivativeInstrument?: IDerivativeInstrument// [1] Sym.1214, Sfx.1215 .. CSetMo.1285
  DerivativeInstrumentAttribute?: IDerivativeInstrumentAttribute[]// [2] Typ.1313, Val.1314
  MarketSegmentGrp?: IMarketSegmentGrp[]// [3] MktID.1301, MktSegID.1300
  SecurityClassificationGrp?: ISecurityClassificationGrp[]// [4] Rsn.1583, Val.1584
}
