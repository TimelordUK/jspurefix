import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

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
