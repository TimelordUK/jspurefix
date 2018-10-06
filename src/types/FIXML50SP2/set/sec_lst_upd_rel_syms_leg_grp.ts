import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { ILegBenchmarkCurveData } from './leg_benchmark_curve_data'

export interface ISecLstUpdRelSymsLegGrp {
  LegSwapType?: number// 690
  SettlType?: string// 63
  InstrumentLeg?: IInstrumentLeg
  LegStipulations?: ILegStipulations[]
  LegBenchmarkCurveData?: ILegBenchmarkCurveData
}
