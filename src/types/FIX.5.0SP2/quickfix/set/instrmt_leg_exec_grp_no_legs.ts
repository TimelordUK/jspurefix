import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { ILegPreAllocGrp } from './leg_pre_alloc_grp'
import { INestedParties3 } from './nested_parties_3'

export interface IInstrmtLegExecGrpNoLegs {
  InstrumentLeg?: IInstrumentLeg// [1] LegSymbol.600, LegSymbolSfx.601 .. LegExchangeLookAlike.2607
  LegOrderQty?: number// [2] 685 (Float)
  LegQty?: number// [3] 687 (Float)
  LegMidPx?: number// [4] 2346 (Float)
  LegSwapType?: number// [5] 690 (Int)
  LegStipulations?: ILegStipulations// [6] NoLegStipulations.683, LegStipulationType.688, LegStipulationValue.689
  LegAllocID?: string// [7] 1366 (String)
  LegPreAllocGrp?: ILegPreAllocGrp// [8] NoLegAllocs.670, LegAllocAccount.671 .. LegCurrentCostBasis.1759
  LegAccount?: string// [9] 2680 (String)
  LegClearingAccountType?: number// [10] 1817 (Int)
  LegPositionEffect?: string// [11] 564 (String)
  LegCoveredOrUncovered?: number// [12] 565 (Int)
  NestedParties3?: INestedParties3// [13] NoNested3PartyIDs.948, Nested3PartyID.949 .. Nested3PartySubIDType.954
  LegRefID?: string// [14] 654 (String)
  LegSettlType?: string// [15] 587 (String)
  LegSettlDate?: Date// [16] 588 (LocalDate)
  LegLastPx?: number// [17] 637 (Float)
  LegSettlCurrency?: string// [18] 675 (String)
  LegSettlCurrencyCodeSource?: string// [19] 2900 (String)
  LegLastForwardPoints?: number// [20] 1073 (Float)
  LegCalculatedCcyLastQty?: number// [21] 1074 (Float)
  LegGrossTradeAmt?: number// [22] 1075 (Float)
  LegShortSaleExemptionReason?: number// [23] 1689 (Int)
  LegVolatility?: number// [24] 1379 (Float)
  LegDividendYield?: number// [25] 1381 (Float)
  LegCurrencyRatio?: number// [26] 1383 (Float)
  LegExecInst?: string// [27] 1384 (String)
  LegLastQty?: number// [28] 1418 (Float)
  FillRefID?: string// [29] 2421 (String)
}
