import { IStandardHeader } from './set/standard_header'
import { IStrmAsgnRptGrp } from './set/strm_asgn_rpt_grp'

/*
**********************************************************
* StreamAssignmentReport can be found in Volume 3 of the *
*                                                        *
* specification                                          *
**********************************************************
*/
export interface IStreamAssignmentReport {
  StreamAsgnRptID: string// [2] 1501 (String)
  StreamAsgnReqType?: number// [2] 1498 (Int)
  StreamAsgnReqID?: string// [2] 1497 (String)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  StrmAsgnRptGrp?: IStrmAsgnRptGrp[]// [2] 
}
