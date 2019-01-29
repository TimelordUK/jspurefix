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
  ClientBidID?: string// 391
  BidID?: string// 390
  TransactTime: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
