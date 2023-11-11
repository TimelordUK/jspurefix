import { IInstrument } from './instrument'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IInstrmtLegGrp } from './instrmt_leg_grp'

export interface IRFQReqGrp {
  PrevClosePx?: number// [1] 140 (Float)
  QuoteRequestType?: number// [1] 303 (Int)
  QuoteType?: number// [1] 537 (Int)
  TradingSessionID?: string// [1] 336 (String)
  TradingSessionSubID?: string// [1] 625 (String)
  Instrument: IInstrument// [1] Sym.55, Sfx.65 .. ExchLookAlike.2603
  UndInstrmtGrp?: IUndInstrmtGrp[]// [2] Sym.311, Sfx.312 .. XID.2631
  InstrmtLegGrp?: IInstrmtLegGrp[]// [3] Sym.600, Sfx.601 .. ExchLookAlike.2607
}
