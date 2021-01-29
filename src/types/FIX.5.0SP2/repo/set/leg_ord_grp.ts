import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { ILegPreAllocGrp } from './leg_pre_alloc_grp'
import { INestedParties } from './nested_parties'

export interface ILegOrdGrp {
  InstrumentLeg?: IInstrumentLeg
  LegQty?: number// 687
  LegSwapType?: number// 690
  LegStipulations?: ILegStipulations[]
  LegAllocID?: string// 1366
  LegPreAllocGrp?: ILegPreAllocGrp[]
  LegPositionEffect?: string// 564
  LegCoveredOrUncovered?: number// 565
  NestedParties?: INestedParties[]
  LegRefID?: string// 654
  LegSettlType?: string// 587
  LegSettlDate?: Date// 588
  LegSettlCurrency?: string// 675
  LegOrderQty?: number// 685
  LegVolatility?: number// 1379
  LegDividendYield?: number// 1381
  LegCurrencyRatio?: number// 1383
  LegExecInst?: string// 1384
}
