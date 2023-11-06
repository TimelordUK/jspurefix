import { IStandardHeader } from './set/standard_header'
import { ICompIDReqGrp } from './set/comp_id_req_grp'

/*
**********************************************************
* NetworkCounterpartySystemStatusRequest can be found in *
* Volume 1 of the                                        *
*                                                        *
* specification                                          *
**********************************************************
*/
export interface INetworkCounterpartySystemStatusRequest {
  NetworkRequestType: number// [2] 935 (Int)
  NetworkRequestID: string// [2] 933 (String)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  CompIDReqGrp?: ICompIDReqGrp[]// [2] RefCompID.930, RefSubID.931 .. DeskID.284
}
