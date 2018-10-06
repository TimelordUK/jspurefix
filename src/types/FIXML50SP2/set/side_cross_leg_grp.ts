import { ILegStipulations } from './leg_stipulations'
import { ILegPreAllocGrp } from './leg_pre_alloc_grp'
import { INestedParties3 } from './nested_parties_3'

export interface ISideCrossLegGrp {
  LegRefID?: string// 654
  LegOrderQty?: number// 685
  LegSwapType?: number// 690
  LegAllocID?: string// 1366
  LegClearingAccountType?: number// 1817
  LegPositionEffect?: string// 564
  LegCoveredOrUncovered?: number// 565
  SettlType?: string// 63
  LegSettlDate?: Date// 588
  LegSettlCurrency?: string// 675
  LegVolatility?: number// 1379
  LegDividendYield?: number// 1381
  LegCurrencyRatio?: number// 1383
  LegExecInst?: string// 1384
  LegShortSaleExemptionReason?: number// 1689
  LegStipulations?: ILegStipulations[]
  LegPreAllocGrp?: ILegPreAllocGrp[]
  NestedParties3?: INestedParties3[]
}
