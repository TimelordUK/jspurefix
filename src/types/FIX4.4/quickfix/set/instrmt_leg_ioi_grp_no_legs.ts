import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'

export interface IInstrmtLegIOIGrpNoLegs {
  InstrumentLeg?: IInstrumentLeg
  LegIOIQty?: string// 682
  LegStipulations?: ILegStipulations
}
