import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
************************************************************
* The reject message should be issued when a message is    *
* received but cannot be passed through to the application *
* level.                                                   *
************************************************************
*/
export interface IReject {
  StandardHeader: IStandardHeader
  RefSeqNum: number// 45
  Text?: string// 58
  StandardTrailer: IStandardTrailer
}
