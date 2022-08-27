import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { INestedParties } from './nested_parties'

export interface IInstrmtLegExecGrpNoLegs {
  InstrumentLeg?: IInstrumentLeg// [1] LegSymbol.600, LegSymbolSfx.601 .. LegInterestAccrualDate.956
  LegQty?: number// [2] 687 (Float)
  LegSwapType?: number// [3] 690 (Int)
  LegStipulations?: ILegStipulations// [4] NoLegStipulations.683, LegStipulationType.688, LegStipulationValue.689
  LegPositionEffect?: string// [5] 564 (String)
  LegCoveredOrUncovered?: number// [6] 565 (Int)
  NestedParties?: INestedParties// [7] NoNestedPartyIDs.539, NestedPartyID.524 .. NestedPartySubIDType.805
  LegRefID?: string// [8] 654 (String)
  LegPrice?: number// [9] 566 (Float)
  LegSettlType?: string// [10] 587 (String)
  LegSettlDate?: Date// [11] 588 (LocalDate)
  LegLastPx?: number// [12] 637 (Float)
}
