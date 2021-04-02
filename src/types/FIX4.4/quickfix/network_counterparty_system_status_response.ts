import { Iheader } from './set/header'
import { ICompIDStatGrp } from './set/comp_id_stat_grp'
import { Itrailer } from './set/trailer'

export interface INetworkCounterpartySystemStatusResponse {
  header: Iheader
  NetworkStatusResponseType: number// 937
  NetworkRequestID?: string// 933
  NetworkResponseID: string// 932
  LastNetworkResponseID?: string// 934
  CompIDStatGrp?: ICompIDStatGrp
  trailer: Itrailer
}
