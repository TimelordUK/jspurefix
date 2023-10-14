import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { INestedParties } from './nested_parties'

export interface ILegQuotStatGrp {
  InstrumentLeg?: IInstrumentLeg// [1] LegSymbol.600, LegSymbolSfx.601 .. LegFlowScheduleType.1440
  LegQty?: number// [2] 687 (Float)
  LegOrderQty?: number// [3] 685 (Float)
  LegSwapType?: number// [4] 690 (Int)
  LegSettlType?: string// [5] 587 (String)
  LegSettlDate?: Date// [6] 588 (LocalDate)
  LegStipulations?: ILegStipulations[]// [7] LegStipulationType.688, LegStipulationValue.689
  NestedParties?: INestedParties[]// [8] NestedPartyID.524, NestedPartyIDSource.525 .. NestedPartySubIDType.805
}
