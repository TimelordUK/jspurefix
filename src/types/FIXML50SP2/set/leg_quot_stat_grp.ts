import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { INestedParties } from './nested_parties'

export interface ILegQuotStatGrp {
  LegOrderQty?: number// 685
  LegQty?: number// 687
  LegMidPx?: number// 2346
  LegSwapType?: number// 690
  InstrumentScopeSettlType?: string// 1557
  LegSettlDate?: Date// 588
  InstrumentLeg?: IInstrumentLeg
  LegStipulations?: ILegStipulations[]
  NestedParties?: INestedParties[]
}
