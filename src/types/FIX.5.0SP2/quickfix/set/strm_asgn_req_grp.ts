import { IParties } from './parties'
import { IStrmAsgnReqInstrmtGrp } from './strm_asgn_req_instrmt_grp'

export interface IStrmAsgnReqGrp {
  Parties?: IParties[]// [1] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  StrmAsgnReqInstrmtGrp?: IStrmAsgnReqInstrmtGrp[]// [2] Symbol.55, SymbolSfx.65 .. MDStreamID.1500
}
