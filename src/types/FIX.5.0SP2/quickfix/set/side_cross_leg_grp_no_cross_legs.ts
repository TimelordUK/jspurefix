import { ILegStipulations } from './leg_stipulations'
import { ILegPreAllocGrp } from './leg_pre_alloc_grp'
import { INestedParties3 } from './nested_parties_3'

export interface ISideCrossLegGrpNoCrossLegs {
  LegRefID?: string// [1] 654 (String)
  LegOrderQty?: number// [2] 685 (Float)
  LegSwapType?: number// [3] 690 (Int)
  LegStipulations?: ILegStipulations// [4] NoLegStipulations.683, LegStipulationType.688, LegStipulationValue.689
  LegAllocID?: string// [5] 1366 (String)
  LegPreAllocGrp?: ILegPreAllocGrp// [6] NoLegAllocs.670, LegAllocAccount.671 .. LegCurrentCostBasis.1759
  LegClearingAccountType?: number// [7] 1817 (Int)
  LegPositionEffect?: string// [8] 564 (String)
  LegCoveredOrUncovered?: number// [9] 565 (Int)
  NestedParties3?: INestedParties3// [10] NoNested3PartyIDs.948, Nested3PartyID.949 .. Nested3PartySubIDType.954
  LegSettlType?: string// [11] 587 (String)
  LegSettlDate?: Date// [12] 588 (LocalDate)
  LegSettlCurrency?: string// [13] 675 (String)
  LegSettlCurrencyCodeSource?: string// [14] 2900 (String)
  LegVolatility?: number// [15] 1379 (Float)
  LegDividendYield?: number// [16] 1381 (Float)
  LegCurrencyRatio?: number// [17] 1383 (Float)
  LegExecInst?: string// [18] 1384 (String)
  LegShortSaleExemptionReason?: number// [19] 1689 (Int)
}
