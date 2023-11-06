import { IInstrumentLeg } from './instrument_leg'
import { ILegFinancingDetails } from './leg_financing_details'
import { ILegPositionAmountData } from './leg_position_amount_data'
import { ILegStipulations } from './leg_stipulations'
import { INestedParties } from './nested_parties'
import { ITradeCapLegUnderlyingsGrp } from './trade_cap_leg_underlyings_grp'

export interface ITrdInstrmtLegGrp {
  LegOrderQty?: number// [1] 685 (Float)
  LegQty?: number// [1] 687 (Float)
  LegMidPx?: number// [1] 2346 (Float)
  LegSwapType?: number// [1] 690 (Int)
  LegReportID?: string// [1] 990 (String)
  LegNumber?: number// [1] 1152 (Int)
  LegAccount?: string// [1] 2680 (String)
  LegClearingAccountType?: number// [1] 1817 (Int)
  LegPositionEffect?: string// [1] 564 (String)
  LegCoveredOrUncovered?: number// [1] 565 (Int)
  LegRefID?: string// [1] 654 (String)
  SettlType?: string// [1] 63 (String)
  LegSettlDate?: Date// [1] 588 (LocalDate)
  LegLastPx?: number// [1] 637 (Float)
  LegPriceType?: number// [1] 686 (Int)
  LegSettlCurrency?: string// [1] 675 (String)
  LegLastForwardPoints?: number// [1] 1073 (Float)
  LegCalculatedCcyLastQty?: number// [1] 1074 (Float)
  LegGrossTradeAmt?: number// [1] 1075 (Float)
  LegShortSaleExemptionReason?: number// [1] 1689 (Int)
  LegVolatility?: number// [1] 1379 (Float)
  LegDividendYield?: number// [1] 1381 (Float)
  LegCurrencyRatio?: number// [1] 1383 (Float)
  LegExecInst?: string// [1] 1384 (String)
  LegLastQty?: number// [1] 1418 (Float)
  LegQtyType?: number// [1] 1591 (Int)
  LegLastMultipliedQty?: number// [1] 2358 (Float)
  LegTotalTradeQty?: number// [1] 2357 (Float)
  LegTotalTradeMultipliedQty?: number// [1] 2360 (Float)
  LegTotalGrossTradeAmt?: number// [1] 2359 (Float)
  LegDifferentialPrice?: number// [1] 2492 (Float)
  InstrumentLeg?: IInstrumentLeg// [1] Sym.600, Sfx.601 .. ExchLookAlike.2607
  LegFinancingDetails?: ILegFinancingDetails// [2] AgmtDesc.2497, AgmtID.2498 .. MgnRatio.2508
  LegPositionAmountData?: ILegPositionAmountData[]// [3] Amt.1587, Typ.1588 .. Rsn.1583
  LegStipulations?: ILegStipulations[]// [4] StipTyp.688, StipVal.689
  NestedParties?: INestedParties[]// [5] ID.524, Src.525 .. Qual.2384
  TradeCapLegUnderlyingsGrp?: ITradeCapLegUnderlyingsGrp[]// [6] 
}
