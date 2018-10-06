import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { ILegPreAllocGrp } from './leg_pre_alloc_grp'
import { INestedParties3 } from './nested_parties_3'

export interface IInstrmtLegExecGrp {
  LegOrderQty?: number// 685
  LegQty?: number// 687
  LegMidPx?: number// 2346
  LegSwapType?: number// 690
  LegAllocID?: string// 1366
  LegAccount?: string// 2680
  LegClearingAccountType?: number// 1817
  LegPositionEffect?: string// 564
  LegCoveredOrUncovered?: number// 565
  LegRefID?: string// 654
  SettlType?: string// 63
  LegSettlDate?: Date// 588
  LegLastPx?: number// 637
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
  FillRefID?: string// 2421
  InstrumentLeg?: IInstrumentLeg
  LegStipulations?: ILegStipulations[]
  LegPreAllocGrp?: ILegPreAllocGrp[]
  NestedParties3?: INestedParties3[]
}
