import { IParties } from './parties'
import { IStrmAsgnReqInstrmtGrp } from './strm_asgn_req_instrmt_grp'

export interface IStrmAsgnReqGrp {
  Parties?: IParties[]// [1] ID.448, Src.447 .. Qual.2376
  StrmAsgnReqInstrmtGrp?: IStrmAsgnReqInstrmtGrp[]// [2] SettlTyp.63, Sz.271, MDStrmID.1500
}
