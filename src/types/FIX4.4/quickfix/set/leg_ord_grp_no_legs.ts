import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { ILegPreAllocGrp } from './leg_pre_alloc_grp'
import { INestedParties } from './nested_parties'

export interface ILegOrdGrpNoLegs {
  InstrumentLeg: IInstrumentLeg
  LegQty?: number// 687
  LegSwapType?: number// 690
  LegStipulations: ILegStipulations
  LegPreAllocGrp: ILegPreAllocGrp
  LegPositionEffect?: string// 564
  LegCoveredOrUncovered?: number// 565
  NestedParties: INestedParties
  LegRefID?: string// 654
  LegPrice?: number// 566
  LegSettlType?: string// 587
  LegSettlDate?: Date// 588
}
