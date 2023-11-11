import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { INestedParties } from './nested_parties'

export interface ILegQuotStatGrp {
  LegOrderQty?: number// [1] 685 (Float)
  LegQty?: number// [1] 687 (Float)
  LegMidPx?: number// [1] 2346 (Float)
  LegSwapType?: number// [1] 690 (Int)
  SettlType?: string// [1] 63 (String)
  LegSettlDate?: Date// [1] 588 (LocalDate)
  InstrumentLeg?: IInstrumentLeg// [1] Sym.600, Sfx.601 .. ExchLookAlike.2607
  LegStipulations?: ILegStipulations[]// [2] StipTyp.688, StipVal.689
  NestedParties?: INestedParties[]// [3] ID.524, Src.525 .. Qual.2384
}
