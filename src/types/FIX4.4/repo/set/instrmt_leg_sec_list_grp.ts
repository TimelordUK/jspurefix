import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { ILegBenchmarkCurveData } from './leg_benchmark_curve_data'

export interface IInstrmtLegSecListGrp {
  InstrumentLeg?: IInstrumentLeg
  LegSwapType?: number// 690
  LegSettlType?: string// 587
  LegStipulations?: ILegStipulations[]
  LegBenchmarkCurveData?: ILegBenchmarkCurveData
}
