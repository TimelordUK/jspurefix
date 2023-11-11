import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { ILegPreAllocGrp } from './leg_pre_alloc_grp'
import { INestedParties } from './nested_parties'

export interface ILegOrdGrpNoLegs {
  InstrumentLeg?: IInstrumentLeg// [1] LegSymbol.600, LegSymbolSfx.601 .. LegExchangeLookAlike.2607
  LegOrderQty?: number// [2] 685 (Float)
  LegQty?: number// [3] 687 (Float)
  LegSwapType?: number// [4] 690 (Int)
  LegStipulations?: ILegStipulations// [5] NoLegStipulations.683, LegStipulationType.688, LegStipulationValue.689
  LegAllocID?: string// [6] 1366 (String)
  LegPreAllocGrp?: ILegPreAllocGrp// [7] NoLegAllocs.670, LegAllocAccount.671 .. LegCurrentCostBasis.1759
  LegAccount?: string// [8] 2680 (String)
  LegClearingAccountType?: number// [9] 1817 (Int)
  LegPositionEffect?: string// [10] 564 (String)
  LegCoveredOrUncovered?: number// [11] 565 (Int)
  NestedParties?: INestedParties// [12] NoNestedPartyIDs.539, NestedPartyID.524 .. NestedPartySubIDType.805
  LegRefID?: string// [13] 654 (String)
  LegSettlType?: string// [14] 587 (String)
  LegSettlDate?: Date// [15] 588 (LocalDate)
  LegSettlCurrency?: string// [16] 675 (String)
  LegSettlCurrencyCodeSource?: string// [17] 2900 (String)
  LegVolatility?: number// [18] 1379 (Float)
  LegDividendYield?: number// [19] 1381 (Float)
  LegCurrencyRatio?: number// [20] 1383 (Float)
  LegExecInst?: string// [21] 1384 (String)
  LegShortSaleExemptionReason?: number// [22] 1689 (Int)
}
