import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { ILegPreAllocGrp } from './leg_pre_alloc_grp'
import { INestedParties3 } from './nested_parties_3'

export interface IInstrmtLegExecGrp {
  LegOrderQty?: number// [1] 685 (Float)
  LegQty?: number// [1] 687 (Float)
  LegMidPx?: number// [1] 2346 (Float)
  LegSwapType?: number// [1] 690 (Int)
  LegAllocID?: string// [1] 1366 (String)
  LegAccount?: string// [1] 2680 (String)
  LegClearingAccountType?: number// [1] 1817 (Int)
  LegPositionEffect?: string// [1] 564 (String)
  LegCoveredOrUncovered?: number// [1] 565 (Int)
  LegRefID?: string// [1] 654 (String)
  SettlType?: string// [1] 63 (String)
  LegSettlDate?: Date// [1] 588 (LocalDate)
  LegLastPx?: number// [1] 637 (Float)
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
  FillRefID?: string// [1] 2421 (String)
  InstrumentLeg?: IInstrumentLeg// [1] Sym.600, Sfx.601 .. ExchLookAlike.2607
  LegStipulations?: ILegStipulations[]// [2] StipTyp.688, StipVal.689
  LegPreAllocGrp?: ILegPreAllocGrp[]// [3] AllocAcct.671, IndAllocID.672 .. CurCostBasis.1759
  NestedParties3?: INestedParties3[]// [4] ID.949, Src.950 .. Qual.2382
}
