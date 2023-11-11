import { IStandardHeader } from './set/standard_header'
import { IStrmAsgnRptGrp } from './set/strm_asgn_rpt_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IStreamAssignmentReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  StreamAsgnRptID: string// [2] 1501 (String)
  StreamAsgnReqType?: number// [3] 1498 (Int)
  StreamAsgnReqID?: string// [4] 1497 (String)
  StrmAsgnRptGrp?: IStrmAsgnRptGrp// [5] NoAsgnReqs.1499, NoAsgnReqs.453 .. EncodedText.355
  StandardTrailer: IStandardTrailer// [6] SignatureLength.93, Signature.89, CheckSum.10
}
