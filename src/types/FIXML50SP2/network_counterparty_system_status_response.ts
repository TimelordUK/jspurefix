import { IStandardHeader } from './set/standard_header'
import { ICompIDStatGrp } from './set/comp_id_stat_grp'

/*
***********************************************************
* NetworkCounterpartySystemStatusResponse can be found in *
* Volume 1 of the                                         *
*                                                         *
* specification                                           *
***********************************************************
*/
export interface INetworkCounterpartySystemStatusResponse {
  NetworkStatusResponseType: number// 937
  NetworkRequestID?: string// 933
  NetworkResponseID: string// 932
  LastNetworkResponseID?: string// 934
  StandardHeader?: IStandardHeader
  CompIDStatGrp?: ICompIDStatGrp[]
}
