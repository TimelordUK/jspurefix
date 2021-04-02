import { Iheader } from './set/header'
import { Itrailer } from './set/trailer'

export interface IListExecute {
  header: Iheader
  ListID: string// 66
  ClientBidID?: string// 391
  BidID?: string// 390
  TransactTime: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  trailer: Itrailer
}
