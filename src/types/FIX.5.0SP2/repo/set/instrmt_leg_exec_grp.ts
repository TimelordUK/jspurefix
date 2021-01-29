import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { ILegPreAllocGrp } from './leg_pre_alloc_grp'
import { INestedParties3 } from './nested_parties_3'

export interface IInstrmtLegExecGrp {
  InstrumentLeg?: IInstrumentLeg
  LegQty?: number// 687
  LegOrderQty?: number// 685
  LegSwapType?: number// 690
  LegStipulations?: ILegStipulations[]
  LegAllocID?: string// 1366
  LegPreAllocGrp?: ILegPreAllocGrp[]
  LegPositionEffect?: string// 564
  LegCoveredOrUncovered?: number// 565
  NestedParties3?: INestedParties3[]
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
}
