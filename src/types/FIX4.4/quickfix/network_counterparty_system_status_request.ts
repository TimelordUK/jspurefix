import { IStandardHeader } from './set/standard_header'
import { ICompIDReqGrp } from './set/comp_id_req_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface INetworkCounterpartySystemStatusRequest {
  StandardHeader: IStandardHeader
  NetworkRequestType: number// 935
  NetworkRequestID: string// 933
  CompIDReqGrp?: ICompIDReqGrp
  StandardTrailer: IStandardTrailer
}
