import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { ILegBenchmarkCurveData } from './leg_benchmark_curve_data'

export interface IInstrmtLegSecListGrpNoLegs {
  InstrumentLeg?: IInstrumentLeg// [1] LegSymbol.600, LegSymbolSfx.601 .. LegInterestAccrualDate.956
  LegSwapType?: number// [2] 690 (Int)
  LegSettlType?: string// [3] 587 (String)
  LegStipulations?: ILegStipulations// [4] NoLegStipulations.683, LegStipulationType.688, LegStipulationValue.689
  LegBenchmarkCurveData?: ILegBenchmarkCurveData// [5] LegBenchmarkCurveCurrency.676, LegBenchmarkCurveName.677 .. LegBenchmarkPriceType.680
}
