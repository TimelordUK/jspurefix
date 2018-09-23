import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { INestedParties } from './nested_parties'

export interface ITrdInstrmtLegGrp {
  InstrumentLeg?: IInstrumentLeg
  LegQty?: number// 687
  LegSwapType?: number// 690
  LegReportID?: string// 990
  LegStipulations?: ILegStipulations[]
  LegPositionEffect?: string// 564
  LegCoveredOrUncovered?: number// 565
  NestedParties?: INestedParties[]
  LegRefID?: string// 654
  LegPrice?: number// 566
  LegSettlType?: string// 587
  LegSettlDate?: Date// 588
  LegLastPx?: number// 637
  LegSettlCurrency?: number// 675
  LegLastForwardPoints?: number// 1073
  LegCalculatedCcyLastQty?: number// 1074
  LegGrossTradeAmt?: number// 1075
}
