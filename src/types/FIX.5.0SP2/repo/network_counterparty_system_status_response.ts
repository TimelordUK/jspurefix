import { IStandardHeader } from './set/standard_header'
import { ICompIDStatGrp } from './set/comp_id_stat_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* This message is sent in response to a Network (Counterparty *
* System) Status Request Message.                             *
***************************************************************
*/
export interface INetworkCounterpartySystemStatusResponse {
  StandardHeader: IStandardHeader
  NetworkStatusResponseType: number// 937
  NetworkRequestID?: string// 933
  NetworkResponseID: string// 932
  LastNetworkResponseID?: string// 934
  CompIDStatGrp: ICompIDStatGrp[]
  StandardTrailer: IStandardTrailer
}
