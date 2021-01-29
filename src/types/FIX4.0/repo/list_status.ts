import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The list status message is issued as the response to a List *
* Status Request message and indicates the current state of   *
* the orders within the list as they exists at the broker's   *
* site.                                                       *
***************************************************************
*/
export interface IListStatus {
  StandardHeader: IStandardHeader
  ListID: string// 66
  WaveNo?: string// 105
  NoRpts: number// 82
  RptSeq: number// 83
  NoOrders: number// 73
  ClOrdID: string// 11
  CumQty: number// 14
  CxlQty: number// 84
  AvgPx: number// 6
  StandardTrailer: IStandardTrailer
}
