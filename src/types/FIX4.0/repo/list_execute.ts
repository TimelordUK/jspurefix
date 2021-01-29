import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
************************************************************
* The list execute message type is used by institutions to *
* instruct the broker to begin execution of a previously   *
* submitted list.                                          *
************************************************************
*/
export interface IListExecute {
  StandardHeader: IStandardHeader
  ListID: string// 66
  WaveNo?: string// 105
  Text?: string// 58
  StandardTrailer: IStandardTrailer
}
