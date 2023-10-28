import { IInstrumentLeg } from './instrument_leg'
import { ILegFinancingDetails } from './leg_financing_details'
import { ILegPositionAmountData } from './leg_position_amount_data'
import { ILegStipulations } from './leg_stipulations'
import { INestedParties } from './nested_parties'
import { ITradeCapLegUnderlyingsGrp } from './trade_cap_leg_underlyings_grp'

export interface ITrdInstrmtLegGrpNoLegs {
  InstrumentLeg?: IInstrumentLeg// [1] LegSymbol.600, LegSymbolSfx.601 .. LegExchangeLookAlike.2607
  LegFinancingDetails?: ILegFinancingDetails// [2] LegAgreementDesc.2497, LegAgreementID.2498 .. LegMarginRatio.2508
  LegPositionAmountData?: ILegPositionAmountData// [3] NoLegPosAmt.1586, LegPosAmt.1587 .. LegPosAmtReason.1590
  LegOrderQty?: number// [4] 685 (Float)
  LegQty?: number// [5] 687 (Float)
  LegMidPx?: number// [6] 2346 (Float)
  LegSwapType?: number// [7] 690 (Int)
  LegReportID?: string// [8] 990 (String)
  LegNumber?: number// [9] 1152 (Int)
  LegStipulations?: ILegStipulations// [10] NoLegStipulations.683, LegStipulationType.688, LegStipulationValue.689
  LegAccount?: string// [11] 2680 (String)
  LegClearingAccountType?: number// [12] 1817 (Int)
  LegPositionEffect?: string// [13] 564 (String)
  LegCoveredOrUncovered?: number// [14] 565 (Int)
  NestedParties?: INestedParties// [15] NoNestedPartyIDs.539, NestedPartyID.524 .. NestedPartySubIDType.805
  LegRefID?: string// [16] 654 (String)
  LegSettlType?: string// [17] 587 (String)
  LegSettlDate?: Date// [18] 588 (LocalDate)
  LegLastPx?: number// [19] 637 (Float)
  LegPriceType?: number// [20] 686 (Int)
  LegSettlCurrency?: string// [21] 675 (String)
  LegSettlCurrencyCodeSource?: string// [22] 2900 (String)
  LegLastForwardPoints?: number// [23] 1073 (Float)
  LegCalculatedCcyLastQty?: number// [24] 1074 (Float)
  LegGrossTradeAmt?: number// [25] 1075 (Float)
  LegShortSaleExemptionReason?: number// [26] 1689 (Int)
  LegVolatility?: number// [27] 1379 (Float)
  LegDividendYield?: number// [28] 1381 (Float)
  LegCurrencyRatio?: number// [29] 1383 (Float)
  LegExecInst?: string// [30] 1384 (String)
  LegLastQty?: number// [31] 1418 (Float)
  LegQtyType?: number// [32] 1591 (Int)
  LegLastMultipliedQty?: number// [33] 2358 (Float)
  LegTotalTradeQty?: number// [34] 2357 (Float)
  LegTotalTradeMultipliedQty?: number// [35] 2360 (Float)
  LegTotalGrossTradeAmt?: number// [36] 2359 (Float)
  TradeCapLegUnderlyingsGrp?: ITradeCapLegUnderlyingsGrp// [37] NoOfLegUnderlyings.1342, UnderlyingLegSymbol.1330 .. UnderlyingLegSecurityDesc.1392
  LegDifferentialPrice?: number// [38] 2492 (Float)
}
