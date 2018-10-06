import { IStandardHeader } from './set/standard_header'
import { IStrmAsgnRptGrp } from './set/strm_asgn_rpt_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* he StreamAssignmentReport message is in response to the      *
* StreamAssignmentRequest message. It provides information     *
* back to the aggregator as to which clients to assign to      *
* receive which price stream based on requested CCY pair. This *
* message can be sent unsolicited to the Aggregator from the   *
* Price Maker.                                                 *
****************************************************************
*/
export interface IStreamAssignmentReport {
  StandardHeader: IStandardHeader
  StreamAsgnRptID: string// 1501
  StreamAsgnReqType?: number// 1498
  StreamAsgnReqID?: string// 1497
  StrmAsgnRptGrp?: IStrmAsgnRptGrp[]
  StandardTrailer: IStandardTrailer
}
