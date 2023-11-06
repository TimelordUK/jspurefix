import { ILegStipulations } from './leg_stipulations'
import { ILegPreAllocGrp } from './leg_pre_alloc_grp'
import { INestedParties3 } from './nested_parties_3'

export interface ISideCrossLegGrp {
  LegRefID?: string// [1] 654 (String)
  LegOrderQty?: number// [1] 685 (Float)
  LegSwapType?: number// [1] 690 (Int)
  LegAllocID?: string// [1] 1366 (String)
  LegClearingAccountType?: number// [1] 1817 (Int)
  LegPositionEffect?: string// [1] 564 (String)
  LegCoveredOrUncovered?: number// [1] 565 (Int)
  SettlType?: string// [1] 63 (String)
  LegSettlDate?: Date// [1] 588 (LocalDate)
  LegSettlCurrency?: string// [1] 675 (String)
  LegVolatility?: number// [1] 1379 (Float)
  LegDividendYield?: number// [1] 1381 (Float)
  LegCurrencyRatio?: number// [1] 1383 (Float)
  LegExecInst?: string// [1] 1384 (String)
  LegShortSaleExemptionReason?: number// [1] 1689 (Int)
  LegStipulations?: ILegStipulations[]// [1] StipTyp.688, StipVal.689
  LegPreAllocGrp?: ILegPreAllocGrp[]// [2] AllocAcct.671, IndAllocID.672 .. CurCostBasis.1759
  NestedParties3?: INestedParties3[]// [3] ID.949, Src.950 .. Qual.2382
}
