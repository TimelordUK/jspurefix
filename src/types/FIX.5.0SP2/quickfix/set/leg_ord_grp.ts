import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { ILegPreAllocGrp } from './leg_pre_alloc_grp'
import { INestedParties } from './nested_parties'

export interface ILegOrdGrp {
  InstrumentLeg?: IInstrumentLeg// [1] LegSymbol.600, LegSymbolSfx.601 .. LegFlowScheduleType.1440
  LegQty?: number// [2] 687 (Float)
  LegSwapType?: number// [3] 690 (Int)
  LegStipulations?: ILegStipulations[]// [4] LegStipulationType.688, LegStipulationValue.689
  LegAllocID?: string// [5] 1366 (String)
  LegPreAllocGrp?: ILegPreAllocGrp[]// [6] LegAllocAccount.671, LegIndividualAllocID.672 .. LegAllocSettlCurrency.1367
  LegPositionEffect?: string// [7] 564 (String)
  LegCoveredOrUncovered?: number// [8] 565 (Int)
  NestedParties?: INestedParties[]// [9] NestedPartyID.524, NestedPartyIDSource.525 .. NestedPartySubIDType.805
  LegRefID?: string// [10] 654 (String)
  LegSettlType?: string// [11] 587 (String)
  LegSettlDate?: Date// [12] 588 (LocalDate)
  LegSettlCurrency?: string// [13] 675 (String)
  LegOrderQty?: number// [14] 685 (Float)
  LegVolatility?: number// [15] 1379 (Float)
  LegDividendYield?: number// [16] 1381 (Float)
  LegCurrencyRatio?: number// [17] 1383 (Float)
  LegExecInst?: string// [18] 1384 (String)
}
