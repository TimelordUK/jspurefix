import { Iheader } from './set/header'
import { ICompIDReqGrp } from './set/comp_id_req_grp'
import { Itrailer } from './set/trailer'

export interface INetworkCounterpartySystemStatusRequest {
  header: Iheader
  NetworkRequestType: number// 935
  NetworkRequestID: string// 933
  CompIDReqGrp?: ICompIDReqGrp
  trailer: Itrailer
}
