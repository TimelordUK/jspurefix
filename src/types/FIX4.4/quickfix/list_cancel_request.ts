import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface IListCancelRequest {
  StandardHeader: IStandardHeader
  ListID: string// 66
  TransactTime: Date// 60
  TradeOriginationDate?: Date// 229
  TradeDate?: Date// 75
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
