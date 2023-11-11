import { IInstrumentLeg } from './instrument_leg'
import { ILegFinancingDetails } from './leg_financing_details'

export interface IInstrmtLegGrpNoLegs {
  InstrumentLeg?: IInstrumentLeg// [1] LegSymbol.600, LegSymbolSfx.601 .. LegExchangeLookAlike.2607
  LegFinancingDetails?: ILegFinancingDetails// [2] LegAgreementDesc.2497, LegAgreementID.2498 .. LegMarginRatio.2508
}
