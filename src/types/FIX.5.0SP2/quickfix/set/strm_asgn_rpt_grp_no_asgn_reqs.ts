import { IParties } from './parties'
import { IStrmAsgnRptInstrmtGrp } from './strm_asgn_rpt_instrmt_grp'

export interface IStrmAsgnRptGrpNoAsgnReqs {
  Parties?: IParties// [1] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  StrmAsgnRptInstrmtGrp?: IStrmAsgnRptInstrmtGrp// [2] NoRelatedSym.146, Symbol.55 .. EncodedText.355
}
