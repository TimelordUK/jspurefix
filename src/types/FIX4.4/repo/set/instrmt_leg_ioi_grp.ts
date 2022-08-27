import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'

export interface IInstrmtLegIOIGrp {
  InstrumentLeg?: IInstrumentLeg// [1] LegSymbol.600, LegSymbolSfx.601 .. LegInterestAccrualDate.956
  LegIOIQty?: string// [2] 682 (String)
  LegStipulations?: ILegStipulations[]// [3] LegStipulationType.688, LegStipulationValue.689
}
