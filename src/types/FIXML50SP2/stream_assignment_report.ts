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
  MDStatisticRptID: string// 2453
  StreamAsgnReqType?: number// 1498
  MDStatisticReqID?: string// 2452
  StandardHeader?: IStandardHeader
  StrmAsgnRptGrp?: IStrmAsgnRptGrp[]
}
