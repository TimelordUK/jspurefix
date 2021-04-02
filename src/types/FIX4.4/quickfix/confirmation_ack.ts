import { Iheader } from './set/header'
import { Itrailer } from './set/trailer'

export interface IConfirmationAck {
  header: Iheader
  ConfirmID: string// 664
  TradeDate: Date// 75
  TransactTime: Date// 60
  AffirmStatus: number// 940
  ConfirmRejReason?: number// 774
  MatchStatus?: string// 573
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  trailer: Itrailer
}
