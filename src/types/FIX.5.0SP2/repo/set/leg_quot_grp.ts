import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { INestedParties } from './nested_parties'
import { ILegBenchmarkCurveData } from './leg_benchmark_curve_data'

export interface ILegQuotGrp {
  InstrumentLeg?: IInstrumentLeg
  LegQty?: number// 687
  LegOrderQty?: number// 685
  LegSwapType?: number// 690
  LegSettlType?: string// 587
  LegSettlDate?: Date// 588
  LegStipulations?: ILegStipulations[]
  NestedParties?: INestedParties[]
  LegPriceType?: number// 686
  LegBidPx?: number// 681
  LegOfferPx?: number// 684
  LegBenchmarkCurveData?: ILegBenchmarkCurveData
  LegRefID?: string// 654
  LegBidForwardPoints?: number// 1067
  LegOfferForwardPoints?: number// 1068
}
