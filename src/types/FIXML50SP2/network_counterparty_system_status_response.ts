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
  NetworkStatusResponseType: number// [2] 937 (Int)
  NetworkRequestID?: string// [2] 933 (String)
  NetworkResponseID: string// [2] 932 (String)
  LastNetworkResponseID?: string// [2] 934 (String)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  CompIDStatGrp?: ICompIDStatGrp[]// [2] RefCompID.930, RefSubID.931 .. StatText.929
}
