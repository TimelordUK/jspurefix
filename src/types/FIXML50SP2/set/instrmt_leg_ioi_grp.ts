import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'

export interface IInstrmtLegIOIGrp {
  LegIOIQty?: string// 682
  InstrumentLeg?: IInstrumentLeg
  LegStipulations?: ILegStipulations[]
}
