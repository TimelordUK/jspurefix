import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { ILegBenchmarkCurveData } from './leg_benchmark_curve_data'

export interface ISecLstUpdRelSymsLegGrpNoLegs {
  InstrumentLeg?: IInstrumentLeg// [1] LegSymbol.600, LegSymbolSfx.601 .. LegExchangeLookAlike.2607
  LegSwapType?: number// [2] 690 (Int)
  LegSettlType?: string// [3] 587 (String)
  LegStipulations?: ILegStipulations// [4] NoLegStipulations.683, LegStipulationType.688, LegStipulationValue.689
  LegBenchmarkCurveData?: ILegBenchmarkCurveData// [5] LegBenchmarkCurveCurrency.676, LegBenchmarkCurveCurrencyCodeSource.2951 .. LegBenchmarkPriceType.680
}
