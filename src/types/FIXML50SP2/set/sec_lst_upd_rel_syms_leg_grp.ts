import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { ILegBenchmarkCurveData } from './leg_benchmark_curve_data'

export interface ISecLstUpdRelSymsLegGrp {
  LegSwapType?: number// [1] 690 (Int)
  SettlType?: string// [1] 63 (String)
  InstrumentLeg?: IInstrumentLeg// [1] Sym.600, Sfx.601 .. ExchLookAlike.2607
  LegStipulations?: ILegStipulations[]// [2] StipTyp.688, StipVal.689
  LegBenchmarkCurveData?: ILegBenchmarkCurveData// [3] Ccy.676, Name.677 .. PxTyp.680
}
