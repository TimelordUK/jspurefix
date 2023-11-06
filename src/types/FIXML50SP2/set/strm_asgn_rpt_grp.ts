import { IParties } from './parties'
import { IStrmAsgnRptInstrmtGrp } from './strm_asgn_rpt_instrmt_grp'

export interface IStrmAsgnRptGrp {
  Parties?: IParties[]// [1] ID.448, Src.447 .. Qual.2376
  StrmAsgnRptInstrmtGrp?: IStrmAsgnRptInstrmtGrp[]// [2] SettlTyp.63, AsgnTyp.1617 .. EncTxt.355
}
