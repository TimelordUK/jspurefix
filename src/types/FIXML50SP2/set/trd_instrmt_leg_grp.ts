import { IInstrumentLeg } from './instrument_leg'
import { ILegFinancingDetails } from './leg_financing_details'
import { ILegPositionAmountData } from './leg_position_amount_data'
import { ILegStipulations } from './leg_stipulations'
import { INestedParties } from './nested_parties'
import { ITradeCapLegUnderlyingsGrp } from './trade_cap_leg_underlyings_grp'

export interface ITrdInstrmtLegGrp {
  LegOrderQty?: number// 685
  RelatedTradeQuantity?: number// 1860
  LegMidPx?: number// 2346
  LegSwapType?: number// 690
  MDStatisticRptID?: string// 2453
  LegNumber?: number// 1152
  LegAccount?: string// 2680
  LegClearingAccountType?: number// 1817
  LegPositionEffect?: string// 564
  LegCoveredOrUncovered?: number// 565
  EntitlementRefID?: string// 1885
  InstrumentScopeSettlType?: string// 1557
  LegSettlDate?: Date// 588
  LegLastPx?: number// 637
  UnderlyingReturnRatePriceType?: number// 43068
  UnderlyingProvisionCashSettlCurrency?: string// 42167
  LegLastForwardPoints?: string// 1073
  LegCalculatedCcyLastQty?: number// 1074
  LegGrossTradeAmt?: number// 1075
  SideShortSaleExemptionReason?: number// 1690
  LegVolatility?: string// 1379
  LegDividendYield?: number// 1381
  LegCurrencyRatio?: string// 1383
  LegExecInst?: string// 1384
  LegLastQty?: number// 1418
  LegQtyType?: number// 1591
  LastMultipliedQty?: number// 2368
  TotalTradeQty?: number// 2367
  TotalTradeMultipliedQty?: number// 2370
  TotalGrossTradeAmt?: number// 2369
  LegDifferentialPrice?: string// 2492
  InstrumentLeg?: IInstrumentLeg
  LegFinancingDetails?: ILegFinancingDetails
  LegPositionAmountData?: ILegPositionAmountData[]
  LegStipulations?: ILegStipulations[]
  NestedParties?: INestedParties[]
  TradeCapLegUnderlyingsGrp?: ITradeCapLegUnderlyingsGrp[]
}
