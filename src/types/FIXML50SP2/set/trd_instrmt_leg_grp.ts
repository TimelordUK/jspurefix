import { IInstrumentLeg } from './instrument_leg'
import { ILegFinancingDetails } from './leg_financing_details'
import { ILegPositionAmountData } from './leg_position_amount_data'
import { ILegStipulations } from './leg_stipulations'
import { INestedParties } from './nested_parties'
import { ITradeCapLegUnderlyingsGrp } from './trade_cap_leg_underlyings_grp'

export interface ITrdInstrmtLegGrp {
  LegOrderQty?: number// 685
  LegQty?: number// 687
  LegMidPx?: number// 2346
  LegSwapType?: number// 690
  LegReportID?: string// 990
  LegNumber?: number// 1152
  LegAccount?: string// 2680
  LegClearingAccountType?: number// 1817
  LegPositionEffect?: string// 564
  LegCoveredOrUncovered?: number// 565
  LegRefID?: string// 654
  InstrumentScopeSettlType?: string// 1557
  LegSettlDate?: Date// 588
  LegLastPx?: number// 637
  LegPriceType?: number// 686
  LegSettlCurrency?: string// 675
  LegLastForwardPoints?: number// 1073
  LegCalculatedCcyLastQty?: number// 1074
  LegGrossTradeAmt?: number// 1075
  LegShortSaleExemptionReason?: number// 1689
  LegVolatility?: number// 1379
  LegDividendYield?: number// 1381
  LegCurrencyRatio?: number// 1383
  LegExecInst?: string// 1384
  LegLastQty?: number// 1418
  LegQtyType?: number// 1591
  LegLastMultipliedQty?: number// 2358
  LegTotalTradeQty?: number// 2357
  LegTotalTradeMultipliedQty?: number// 2360
  LegTotalGrossTradeAmt?: number// 2359
  LegDifferentialPrice?: number// 2492
  InstrumentLeg?: IInstrumentLeg
  LegFinancingDetails?: ILegFinancingDetails
  LegPositionAmountData?: ILegPositionAmountData[]
  LegStipulations?: ILegStipulations[]
  NestedParties?: INestedParties[]
  TradeCapLegUnderlyingsGrp?: ITradeCapLegUnderlyingsGrp[]
}
