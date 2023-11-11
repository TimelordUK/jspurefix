import { IStandardHeader } from './set/standard_header'
import { IStrmAsgnReqGrp } from './set/strm_asgn_req_grp'

/*
***********************************************************
* StreamAssignmentRequest can be found in Volume 3 of the *
*                                                         *
* specification                                           *
***********************************************************
*/
export interface IStreamAssignmentRequest {
  StreamAsgnReqID: string// [2] 1497 (String)
  StreamAsgnReqType: number// [2] 1498 (Int)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  StrmAsgnReqGrp?: IStrmAsgnReqGrp[]// [2] 
}
