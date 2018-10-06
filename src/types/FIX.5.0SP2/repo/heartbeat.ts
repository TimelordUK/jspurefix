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
  StandardHeader: IStandardHeader
  TestReqID?: string// 112
  StandardTrailer: IStandardTrailer
}
