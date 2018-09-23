import { ICompIDReqGrp } from './set/comp_id_req_grp'

export interface INetworkCounterpartySystemStatusRequest {
  NetworkRequestType: number// 935
  NetworkRequestID: string// 933
  CompIDReqGrp?: ICompIDReqGrp
}
