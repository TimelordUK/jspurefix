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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  StreamAsgnReqID: string// [2] 1497 (String)
  StreamAsgnReqType: number// [3] 1498 (Int)
  StrmAsgnReqGrp: IStrmAsgnReqGrp[]// [4] Parties.453, PartyID.448 .. MDStreamID.1500
  StandardTrailer: IStandardTrailer// [5] SignatureLength.93, Signature.89, CheckSum.10
}
