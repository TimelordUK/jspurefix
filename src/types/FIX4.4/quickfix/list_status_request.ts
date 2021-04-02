import { Iheader } from './set/header'
import { Itrailer } from './set/trailer'

export interface IListStatusRequest {
  header: Iheader
  ListID: string// 66
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  trailer: Itrailer
}
