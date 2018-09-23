import { IParties } from './parties'
import { IStrmAsgnReqInstrmtGrp } from './strm_asgn_req_instrmt_grp'

export interface IStrmAsgnReqGrp {
  Parties?: IParties[]
  StrmAsgnReqInstrmtGrp?: IStrmAsgnReqInstrmtGrp[]
}
