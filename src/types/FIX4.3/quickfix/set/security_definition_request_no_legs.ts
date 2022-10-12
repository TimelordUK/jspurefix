import { IInstrumentLeg } from './instrument_leg'

export interface ISecurityDefinitionRequestNoLegs {
  InstrumentLeg?: IInstrumentLeg// [1] LegSymbol.600, LegSymbolSfx.601 .. LegSide.624
  LegCurrency?: string// [2] 556 (String)
}
