import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { INestedParties } from './nested_parties'
import { ILegBenchmarkCurveData } from './leg_benchmark_curve_data'

export interface IQuotReqLegsGrp {
  LegOrderQty?: number// 685
  RelatedTradeQuantity?: number// 1860
  LegMidPx?: number// 2346
  LegSwapType?: number// 690
  InstrumentScopeSettlType?: string// 1557
  LegSettlDate?: Date// 588
  EntitlementRefID?: string// 1885
  InstrumentLeg?: IInstrumentLeg
  LegStipulations?: ILegStipulations[]
  NestedParties?: INestedParties[]
  LegBenchmarkCurveData?: ILegBenchmarkCurveData
}
