import { ILegStipulations } from './leg_stipulations'
import { ILegPreAllocGrp } from './leg_pre_alloc_grp'
import { INestedParties3 } from './nested_parties_3'

export interface ISideCrossLegGrp {
  EntitlementRefID?: string// 1885
  LegOrderQty?: number// 685
  LegSwapType?: number// 690
  LegAllocID?: string// 1366
  LegClearingAccountType?: number// 1817
  LegPositionEffect?: string// 564
  LegCoveredOrUncovered?: number// 565
  InstrumentScopeSettlType?: string// 1557
  LegSettlDate?: Date// 588
  UnderlyingProvisionCashSettlCurrency?: string// 42167
  LegVolatility?: string// 1379
  LegDividendYield?: number// 1381
  LegCurrencyRatio?: string// 1383
  LegExecInst?: string// 1384
  SideShortSaleExemptionReason?: number// 1690
  LegStipulations?: ILegStipulations[]
  LegPreAllocGrp?: ILegPreAllocGrp[]
  NestedParties3?: INestedParties3[]
}
