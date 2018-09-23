import { IInstrument } from './instrument'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IInstrmtLegGrp } from './instrmt_leg_grp'

export interface IInstrmtMDReqGrpNoRelatedSym {
  Instrument: IInstrument
  UndInstrmtGrp: IUndInstrmtGrp
  InstrmtLegGrp: IInstrmtLegGrp
}
