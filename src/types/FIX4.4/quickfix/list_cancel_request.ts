import { Iheader } from './set/header'
import { Itrailer } from './set/trailer'

export interface IListCancelRequest {
  header: Iheader
  ListID: string// 66
  TransactTime: Date// 60
  TradeOriginationDate?: Date// 229
  TradeDate?: Date// 75
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  trailer: Itrailer
}
