import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { INestedParties } from './nested_parties'
import { ITradeCapLegUnderlyingsGrp } from './trade_cap_leg_underlyings_grp'

export interface ITrdInstrmtLegGrp {
  InstrumentLeg?: IInstrumentLeg
  LegQty?: number// 687
  LegSwapType?: number// 690
  LegReportID?: string// 990
  LegNumber?: number// 1152
  LegStipulations?: ILegStipulations[]
  LegPositionEffect?: string// 564
  LegCoveredOrUncovered?: number// 565
  NestedParties?: INestedParties[]
  LegRefID?: string// 654
  LegSettlType?: string// 587
  LegSettlDate?: Date// 588
  LegLastPx?: number// 637
  LegSettlCurrency?: string// 675
  LegLastForwardPoints?: number// 1073
  LegCalculatedCcyLastQty?: number// 1074
  LegGrossTradeAmt?: number// 1075
  LegVolatility?: number// 1379
  LegDividendYield?: number// 1381
  LegCurrencyRatio?: number// 1383
  LegExecInst?: string// 1384
  LegLastQty?: number// 1418
  TradeCapLegUnderlyingsGrp?: ITradeCapLegUnderlyingsGrp[]
}
