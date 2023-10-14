import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { ILegPreAllocGrp } from './leg_pre_alloc_grp'
import { INestedParties3 } from './nested_parties_3'

export interface IInstrmtLegExecGrp {
  InstrumentLeg?: IInstrumentLeg// [1] LegSymbol.600, LegSymbolSfx.601 .. LegFlowScheduleType.1440
  LegQty?: number// [2] 687 (Float)
  LegOrderQty?: number// [3] 685 (Float)
  LegSwapType?: number// [4] 690 (Int)
  LegStipulations?: ILegStipulations[]// [5] LegStipulationType.688, LegStipulationValue.689
  LegAllocID?: string// [6] 1366 (String)
  LegPreAllocGrp?: ILegPreAllocGrp[]// [7] LegAllocAccount.671, LegIndividualAllocID.672 .. LegAllocSettlCurrency.1367
  LegPositionEffect?: string// [8] 564 (String)
  LegCoveredOrUncovered?: number// [9] 565 (Int)
  NestedParties3?: INestedParties3[]// [10] Nested3PartyID.949, Nested3PartyIDSource.950 .. Nested3PartySubIDType.954
  LegRefID?: string// [11] 654 (String)
  LegSettlType?: string// [12] 587 (String)
  LegSettlDate?: Date// [13] 588 (LocalDate)
  LegLastPx?: number// [14] 637 (Float)
  LegSettlCurrency?: string// [15] 675 (String)
  LegLastForwardPoints?: number// [16] 1073 (Float)
  LegCalculatedCcyLastQty?: number// [17] 1074 (Float)
  LegGrossTradeAmt?: number// [18] 1075 (Float)
  LegVolatility?: number// [19] 1379 (Float)
  LegDividendYield?: number// [20] 1381 (Float)
  LegCurrencyRatio?: number// [21] 1383 (Float)
  LegExecInst?: string// [22] 1384 (String)
  LegLastQty?: number// [23] 1418 (Float)
}
