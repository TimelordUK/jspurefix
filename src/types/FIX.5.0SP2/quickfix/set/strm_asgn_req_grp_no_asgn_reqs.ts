import { IParties } from './parties'
import { IStrmAsgnReqInstrmtGrp } from './strm_asgn_req_instrmt_grp'

export interface IStrmAsgnReqGrpNoAsgnReqs {
  Parties?: IParties// [1] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  StrmAsgnReqInstrmtGrp?: IStrmAsgnReqInstrmtGrp// [2] NoRelatedSym.146, Symbol.55 .. MDStreamID.1500
}
