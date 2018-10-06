import { IParties } from './parties'
import { IStrmAsgnRptInstrmtGrp } from './strm_asgn_rpt_instrmt_grp'

export interface IStrmAsgnRptGrp {
  Parties?: IParties[]
  StrmAsgnRptInstrmtGrp?: IStrmAsgnRptInstrmtGrp[]
}
