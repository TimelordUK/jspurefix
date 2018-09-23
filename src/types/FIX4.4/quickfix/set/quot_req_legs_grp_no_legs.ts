import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { INestedParties } from './nested_parties'
import { ILegBenchmarkCurveData } from './leg_benchmark_curve_data'

export interface IQuotReqLegsGrpNoLegs {
  InstrumentLeg?: IInstrumentLeg
  LegQty?: number// 687
  LegSwapType?: number// 690
  LegSettlType?: string// 587
  LegSettlDate?: Date// 588
  LegStipulations?: ILegStipulations
  NestedParties?: INestedParties
  LegBenchmarkCurveData?: ILegBenchmarkCurveData
}
