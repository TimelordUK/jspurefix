import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
*************************************************************
* The Confirmation Ack (aka Affirmation) message is used to *
* respond to a Confirmation message.                        *
*************************************************************
*/
export interface IConfirmationAck {
  StandardHeader: IStandardHeader
  ConfirmID: string// 664
  TradeDate: Date// 75
  TransactTime: Date// 60
  AffirmStatus: number// 940
  ConfirmRejReason?: number// 774
  MatchStatus?: string// 573
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
