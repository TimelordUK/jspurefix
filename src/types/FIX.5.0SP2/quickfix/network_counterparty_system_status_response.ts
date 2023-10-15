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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  NetworkStatusResponseType: number// [2] 937 (Int)
  NetworkRequestID?: string// [3] 933 (String)
  NetworkResponseID: string// [4] 932 (String)
  LastNetworkResponseID?: string// [5] 934 (String)
  CompIDStatGrp: ICompIDStatGrp[]// [6] RefCompID.930, RefSubID.931 .. StatusText.929
  StandardTrailer: IStandardTrailer// [7] SignatureLength.93, Signature.89, CheckSum.10
}