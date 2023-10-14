import { IInstrument } from './instrument'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IInstrmtLegGrp } from './instrmt_leg_grp'

export interface IInstrmtMDReqGrp {
  Instrument: IInstrument// [1] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  UndInstrmtGrp?: IUndInstrmtGrp// [2] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  InstrmtLegGrp?: IInstrmtLegGrp// [3] NoLegs.555, LegSymbol.600 .. LegFlowScheduleType.1440
  Currency?: string// [4] 15 (String)
  QuoteType?: number// [5] 537 (Int)
  SettlType?: string// [6] 63 (String)
  SettlDate?: Date// [7] 64 (LocalDate)
  MDEntrySize?: number// [8] 271 (Float)
  MDStreamID?: string// [9] 1500 (String)
}
