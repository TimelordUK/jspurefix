import { IInstrumentLeg } from './instrument_leg'

export interface IInstrmtLegGrp {
  NoLegs?: number// [1] 555 (Int)
  InstrumentLeg?: IInstrumentLeg// [2] LegSymbol.600, LegSymbolSfx.601 .. LegFlowScheduleType.1440
}
