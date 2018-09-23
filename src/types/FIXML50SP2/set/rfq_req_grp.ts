import { IInstrument } from './instrument'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IInstrmtLegGrp } from './instrmt_leg_grp'

export interface IRFQReqGrp {
  PrevClosePx?: number// 140
  RiskLimitRequestType?: number// 1760
  UnderlyingReturnRateValuationDateType?: number// 43073
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  Instrument: IInstrument
  UndInstrmtGrp?: IUndInstrmtGrp[]
  InstrmtLegGrp?: IInstrmtLegGrp[]
}
