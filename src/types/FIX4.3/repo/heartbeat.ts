import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Heartbeat monitors the status of the communication link  *
* and identifies when the last of a string of messages was not *
* received.                                                    *
****************************************************************
*/
export interface IHeartbeat {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  TestReqID?: string// [2] 112 (String)
  StandardTrailer: IStandardTrailer// [3] SignatureLength.93, Signature.89, CheckSum.10
}
