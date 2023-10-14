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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  StreamAsgnRptID: string// [2] 1501 (String)
  StreamAsgnReqType?: number// [3] 1498 (Int)
  StreamAsgnReqID?: string// [4] 1497 (String)
  StrmAsgnRptGrp?: IStrmAsgnRptGrp[]// [5] Parties.453, PartyID.448 .. EncodedText.355
  StandardTrailer: IStandardTrailer// [6] SignatureLength.93, Signature.89, CheckSum.10
}
