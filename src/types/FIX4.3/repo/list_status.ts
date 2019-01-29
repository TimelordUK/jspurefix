import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The list status message is issued as the response to a List  *
* Status Request message sent in an unsolicited fashion by the *
* sell-side.                                                   *
****************************************************************
*/
export interface IListStatus {
  StandardHeader: IStandardHeader
  ListID: string// 66
  ListStatusType: number// 429
  NoRpts: number// 82
  ListOrderStatus: number// 431
  RptSeq: number// 83
  ListStatusText?: string// 444
  EncodedListStatusTextLen?: number// 445
  EncodedListStatusText?: Buffer// 446
  TransactTime?: Date// 60
  TotNoOrders: number// 68
  NoOrders: number// 73
  ClOrdID: string// 11
  CumQty: number// 14
  OrdStatus: string// 39
  LeavesQty: number// 151
  CxlQty: number// 84
  AvgPx: number// 6
  OrdRejReason?: number// 103
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
