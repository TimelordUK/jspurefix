import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { INestedParties } from './nested_parties'
import { ILegBenchmarkCurveData } from './leg_benchmark_curve_data'

export interface ILegQuotGrpNoLegs {
  InstrumentLeg?: IInstrumentLeg
  LegQty?: number// 687
  LegSwapType?: number// 690
  LegSettlType?: string// 587
  LegSettlDate?: Date// 588
  LegStipulations?: ILegStipulations
  NestedParties?: INestedParties
  LegPriceType?: number// 686
  LegBidPx?: number// 681
  LegOfferPx?: number// 684
  LegBenchmarkCurveData?: ILegBenchmarkCurveData
}
