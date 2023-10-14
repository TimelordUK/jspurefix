import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { INestedParties } from './nested_parties'
import { ITradeCapLegUnderlyingsGrp } from './trade_cap_leg_underlyings_grp'

export interface ITrdInstrmtLegGrp {
  InstrumentLeg?: IInstrumentLeg// [1] LegSymbol.600, LegSymbolSfx.601 .. LegFlowScheduleType.1440
  LegQty?: number// [2] 687 (Float)
  LegSwapType?: number// [3] 690 (Int)
  LegReportID?: string// [4] 990 (String)
  LegNumber?: number// [5] 1152 (Int)
  LegStipulations?: ILegStipulations[]// [6] LegStipulationType.688, LegStipulationValue.689
  LegPositionEffect?: string// [7] 564 (String)
  LegCoveredOrUncovered?: number// [8] 565 (Int)
  NestedParties?: INestedParties[]// [9] NestedPartyID.524, NestedPartyIDSource.525 .. NestedPartySubIDType.805
  LegRefID?: string// [10] 654 (String)
  LegSettlType?: string// [11] 587 (String)
  LegSettlDate?: Date// [12] 588 (LocalDate)
  LegLastPx?: number// [13] 637 (Float)
  LegSettlCurrency?: string// [14] 675 (String)
  LegLastForwardPoints?: number// [15] 1073 (Float)
  LegCalculatedCcyLastQty?: number// [16] 1074 (Float)
  LegGrossTradeAmt?: number// [17] 1075 (Float)
  LegVolatility?: number// [18] 1379 (Float)
  LegDividendYield?: number// [19] 1381 (Float)
  LegCurrencyRatio?: number// [20] 1383 (Float)
  LegExecInst?: string// [21] 1384 (String)
  LegLastQty?: number// [22] 1418 (Float)
  TradeCapLegUnderlyingsGrp?: ITradeCapLegUnderlyingsGrp[]// [23] UnderlyingLegSymbol.1330, UnderlyingLegSymbolSfx.1331 .. UnderlyingLegSecurityDesc.1392
}
