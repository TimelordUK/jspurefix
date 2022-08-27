import { IInstrument } from './instrument'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IInstrmtLegGrp } from './instrmt_leg_grp'

export interface IRFQReqGrpNoRelatedSym {
  Instrument: IInstrument// [1] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  UndInstrmtGrp: IUndInstrmtGrp// [2] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingStipValue.889
  InstrmtLegGrp: IInstrmtLegGrp// [3] NoLegs.555, LegSymbol.600 .. LegInterestAccrualDate.956
  PrevClosePx?: number// [4] 140 (Float)
  QuoteRequestType?: number// [5] 303 (Int)
  QuoteType?: number// [6] 537 (Int)
  TradingSessionID?: string// [7] 336 (String)
  TradingSessionSubID?: string// [8] 625 (String)
}
