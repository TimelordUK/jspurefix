import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { INestedParties } from './nested_parties'

export interface ILegQuotStatGrp {
  InstrumentLeg?: IInstrumentLeg
  LegQty?: number// 687
  LegOrderQty?: number// 685
  LegSwapType?: number// 690
  LegSettlType?: string// 587
  LegSettlDate?: Date// 588
  LegStipulations?: ILegStipulations[]
  NestedParties?: INestedParties[]
}
