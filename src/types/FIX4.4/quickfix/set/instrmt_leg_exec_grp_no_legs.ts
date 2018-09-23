import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { INestedParties } from './nested_parties'

export interface IInstrmtLegExecGrpNoLegs {
  InstrumentLeg?: IInstrumentLeg
  LegQty?: number// 687
  LegSwapType?: number// 690
  LegStipulations?: ILegStipulations
  LegPositionEffect?: string// 564
  LegCoveredOrUncovered?: number// 565
  NestedParties?: INestedParties
  LegRefID?: string// 654
  LegPrice?: number// 566
  LegSettlType?: string// 587
  LegSettlDate?: Date// 588
  LegLastPx?: number// 637
}
