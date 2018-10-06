import { IStandardHeader } from './set/standard_header'

/*
***************************************************
* ConfirmationAck can be found in Volume 5 of the *
*                                                 *
* specification                                   *
***************************************************
*/
export interface IConfirmationAck {
  ConfirmID: string// 664
  TradeDate: Date// 75
  TransactTime: Date// 60
  AffirmStatus: number// 940
  TradeConfirmationReferenceID?: string// 2390
  ConfirmRejReason?: number// 774
  MatchStatus?: string// 573
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
}
