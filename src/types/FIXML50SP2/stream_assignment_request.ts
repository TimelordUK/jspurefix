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
  StreamAsgnReqID: string// 1497
  StreamAsgnReqType: number// 1498
  StandardHeader?: IStandardHeader
  StrmAsgnReqGrp?: IStrmAsgnReqGrp[]
}
