import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { ILegBenchmarkCurveData } from './leg_benchmark_curve_data'

export interface ISecLstUpdRelSymsLegGrp {
  InstrumentLeg?: IInstrumentLeg
  LegSwapType?: number// 690
  LegSettlType?: string// 587
  LegStipulations?: ILegStipulations[]
  LegBenchmarkCurveData?: ILegBenchmarkCurveData
}
