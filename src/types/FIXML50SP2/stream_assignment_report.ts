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
  StreamAsgnRptID: string// 1501
  StreamAsgnReqType?: number// 1498
  StreamAsgnReqID?: string// 1497
  StandardHeader?: IStandardHeader
  StrmAsgnRptGrp?: IStrmAsgnRptGrp[]
}
