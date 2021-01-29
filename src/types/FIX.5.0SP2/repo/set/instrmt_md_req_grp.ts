import { IInstrument } from './instrument'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IInstrmtLegGrp } from './instrmt_leg_grp'

export interface IInstrmtMDReqGrp {
  Instrument: IInstrument
  UndInstrmtGrp?: IUndInstrmtGrp
  InstrmtLegGrp?: IInstrmtLegGrp
  Currency?: string// 15
  QuoteType?: number// 537
  SettlType?: string// 63
  SettlDate?: Date// 64
  MDEntrySize?: number// 271
  MDStreamID?: string// 1500
}
