import { ICompIDStatGrp } from './set/comp_id_stat_grp'

export interface INetworkCounterpartySystemStatusResponse {
  NetworkStatusResponseType: number// 937
  NetworkRequestID?: string// 933
  NetworkResponseID: string// 932
  LastNetworkResponseID?: string// 934
  CompIDStatGrp?: ICompIDStatGrp
}
