import { IStandardHeader } from './set/standard_header'
import { IStrmAsgnReqGrp } from './set/strm_asgn_req_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* In certain markets where market data aggregators fan out to *
* end clients the pricing streams provided by the price       *
* makers, the price maker may assign the clients to certain   *
* pricing streams that the price maker publishes via the      *
* aggregator. An example of this use is in the FX markets     *
* where clients may be assigned to different pricing streams  *
* based on volume bands and currency pairs.                   *
***************************************************************
*/
export interface IStreamAssignmentRequest {
  StandardHeader: IStandardHeader
  StreamAsgnReqID: string// 1497
  StreamAsgnReqType: number// 1498
  StrmAsgnReqGrp: IStrmAsgnReqGrp[]
  StandardTrailer: IStandardTrailer
}
