import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { INestedParties } from './nested_parties'
import { ILegBenchmarkCurveData } from './leg_benchmark_curve_data'

export interface ILegQuotGrp {
  LegOrderQty?: number// 685
  LegQty?: number// 687
  LegMidPx?: number// 2346
  LegSwapType?: number// 690
  SettlType?: string// 63
  LegSettlDate?: Date// 588
  LegPriceType?: number// 686
  LegBidPx?: number// 681
  LegOfferPx?: number// 684
  LegRefID?: string// 654
  LegBidForwardPoints?: number// 1067
  LegOfferForwardPoints?: number// 1068
  InstrumentLeg?: IInstrumentLeg
  LegStipulations?: ILegStipulations[]
  NestedParties?: INestedParties[]
  LegBenchmarkCurveData?: ILegBenchmarkCurveData
}
