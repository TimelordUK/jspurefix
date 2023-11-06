import { IStandardHeader } from './set/standard_header'

/*
***************************************************
* ConfirmationAck can be found in Volume 5 of the *
*                                                 *
* specification                                   *
***************************************************
*/
export interface IConfirmationAck {
  ConfirmID: string// [2] 664 (String)
  TradeDate: Date// [2] 75 (LocalDate)
  TransactTime: Date// [2] 60 (UtcTimestamp)
  AffirmStatus: number// [2] 940 (Int)
  TradeConfirmationReferenceID?: string// [2] 2390 (String)
  ConfirmRejReason?: number// [2] 774 (Int)
  MatchStatus?: string// [2] 573 (String)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
}
