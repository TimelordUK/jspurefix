import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The list cancel request message type is used by institutions *
* wishing to cancel previously submitted lists either before   *
* or during execution.                                         *
****************************************************************
*/
export interface IListCancelRequest {
  StandardHeader: IStandardHeader
  ListID: string// 66
  WaveNo?: string// 105
  Text?: string// 58
  StandardTrailer: IStandardTrailer
}
