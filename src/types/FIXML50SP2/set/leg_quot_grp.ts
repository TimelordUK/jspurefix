import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { INestedParties } from './nested_parties'
import { ILegBenchmarkCurveData } from './leg_benchmark_curve_data'

export interface ILegQuotGrp {
  LegOrderQty?: number// [1] 685 (Float)
  LegQty?: number// [1] 687 (Float)
  LegMidPx?: number// [1] 2346 (Float)
  LegSwapType?: number// [1] 690 (Int)
  SettlType?: string// [1] 63 (String)
  LegSettlDate?: Date// [1] 588 (LocalDate)
  LegPriceType?: number// [1] 686 (Int)
  LegBidPx?: number// [1] 681 (Float)
  LegOfferPx?: number// [1] 684 (Float)
  LegRefID?: string// [1] 654 (String)
  LegBidForwardPoints?: number// [1] 1067 (Float)
  LegOfferForwardPoints?: number// [1] 1068 (Float)
  InstrumentLeg?: IInstrumentLeg// [1] Sym.600, Sfx.601 .. ExchLookAlike.2607
  LegStipulations?: ILegStipulations[]// [2] StipTyp.688, StipVal.689
  NestedParties?: INestedParties[]// [3] ID.524, Src.525 .. Qual.2384
  LegBenchmarkCurveData?: ILegBenchmarkCurveData// [4] Ccy.676, Name.677 .. PxTyp.680
}
