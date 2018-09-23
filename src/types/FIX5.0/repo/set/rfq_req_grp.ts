import { IInstrument } from './instrument'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IInstrmtLegGrp } from './instrmt_leg_grp'

export interface IRFQReqGrp {
  Instrument: IInstrument
  UndInstrmtGrp?: IUndInstrmtGrp
  InstrmtLegGrp?: IInstrmtLegGrp
  PrevClosePx?: number// 140
  QuoteRequestType?: number// 303
  QuoteType?: number// 537
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
}
