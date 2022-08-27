import { IStandardHeader } from './set/standard_header'
import { ICompIDReqGrp } from './set/comp_id_req_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface INetworkCounterpartySystemStatusRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  NetworkRequestType: number// [2] 935 (Int)
  NetworkRequestID: string// [3] 933 (String)
  CompIDReqGrp?: ICompIDReqGrp[]// [4] RefCompID.930, RefSubID.931 .. DeskID.284
  StandardTrailer: IStandardTrailer// [5] SignatureLength.93, Signature.89, CheckSum.10
}
