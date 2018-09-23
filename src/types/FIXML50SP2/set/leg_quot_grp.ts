import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { INestedParties } from './nested_parties'
import { ILegBenchmarkCurveData } from './leg_benchmark_curve_data'

export interface ILegQuotGrp {
  LegOrderQty?: number// 685
  RelatedTradeQuantity?: number// 1860
  LegMidPx?: number// 2346
  LegSwapType?: number// 690
  InstrumentScopeSettlType?: string// 1557
  LegSettlDate?: Date// 588
  UnderlyingReturnRatePriceType?: number// 43068
  LegBidPx?: number// 681
  LegOfferPx?: number// 684
  EntitlementRefID?: string// 1885
  LegBidForwardPoints?: string// 1067
  LegOfferForwardPoints?: string// 1068
  InstrumentLeg?: IInstrumentLeg
  LegStipulations?: ILegStipulations[]
  NestedParties?: INestedParties[]
  LegBenchmarkCurveData?: ILegBenchmarkCurveData
}
