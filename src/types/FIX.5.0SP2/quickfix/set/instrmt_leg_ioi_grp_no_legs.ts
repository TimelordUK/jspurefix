import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'

export interface IInstrmtLegIOIGrpNoLegs {
  InstrumentLeg?: IInstrumentLeg// [1] LegSymbol.600, LegSymbolSfx.601 .. LegExchangeLookAlike.2607
  LegIOIQty?: string// [2] 682 (String)
  LegStipulations?: ILegStipulations// [3] NoLegStipulations.683, LegStipulationType.688, LegStipulationValue.689
}
