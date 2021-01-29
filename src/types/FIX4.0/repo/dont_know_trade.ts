import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
*************************************************************
* The Dont Know Trade (DK) message is used to notify a     *
* trading partner that an electronically received execution *
* has been rejected. This message can be thought of as an   *
* execution reject message.                                 *
*************************************************************
*/
export interface IDontKnowTrade {
  StandardHeader: IStandardHeader
  OrderID?: string// 37
  ExecID?: number// 17
  DKReason: string// 127
  Symbol: string// 55
  Side: string// 54
  OrderQty: number// 38
  LastShares: number// 32
  LastPx: number// 31
  Text?: string// 58
  StandardTrailer: IStandardTrailer
}
