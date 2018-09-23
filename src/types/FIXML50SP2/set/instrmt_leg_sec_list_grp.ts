import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { ILegBenchmarkCurveData } from './leg_benchmark_curve_data'

export interface IInstrmtLegSecListGrp {
  LegSwapType?: number// 690
  InstrumentScopeSettlType?: string// 1557
  InstrumentLeg?: IInstrumentLeg
  LegStipulations?: ILegStipulations[]
  LegBenchmarkCurveData?: ILegBenchmarkCurveData
}
