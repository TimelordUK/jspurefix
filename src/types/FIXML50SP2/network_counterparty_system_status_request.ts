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
  NetworkRequestType: number// 935
  NetworkRequestID: string// 933
  StandardHeader?: IStandardHeader
  CompIDReqGrp?: ICompIDReqGrp[]
}
