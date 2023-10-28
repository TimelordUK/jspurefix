import { IStandardHeader } from './set/standard_header'
import { IStrmAsgnReqGrp } from './set/strm_asgn_req_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IStreamAssignmentRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  StreamAsgnReqID: string// [2] 1497 (String)
  StreamAsgnReqType: number// [3] 1498 (Int)
  StrmAsgnReqGrp?: IStrmAsgnReqGrp// [4] NoAsgnReqs.1499, NoAsgnReqs.453 .. MDStreamID.1500
  StandardTrailer: IStandardTrailer// [5] SignatureLength.93, Signature.89, CheckSum.10
}
