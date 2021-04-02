import { Iheader } from './set/header'
import { Itrailer } from './set/trailer'

export interface IBusinessMessageReject {
  header: Iheader
  RefSeqNum?: number// 45
  RefMsgType: string// 372
  BusinessRejectRefID?: string// 379
  BusinessRejectReason: number// 380
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  trailer: Itrailer
}
