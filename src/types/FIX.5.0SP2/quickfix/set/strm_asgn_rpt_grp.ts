import { IParties } from './parties'
import { IStrmAsgnRptInstrmtGrp } from './strm_asgn_rpt_instrmt_grp'

export interface IStrmAsgnRptGrp {
  Parties?: IParties[]// [1] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  StrmAsgnRptInstrmtGrp?: IStrmAsgnRptInstrmtGrp[]// [2] Symbol.55, SymbolSfx.65 .. EncodedText.355
}
