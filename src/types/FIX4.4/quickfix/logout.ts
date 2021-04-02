import { Iheader } from './set/header'
import { Itrailer } from './set/trailer'

export interface ILogout {
  header: Iheader
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  trailer: Itrailer
}
