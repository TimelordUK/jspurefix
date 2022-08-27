import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
*************************************************************
* The Confirmation Ack (aka Affirmation) message is used to *
* respond to a Confirmation message.                        *
*************************************************************
*/
export interface IConfirmationAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ConfirmID: string// [2] 664 (String)
  TradeDate: Date// [3] 75 (LocalDate)
  TransactTime: Date// [4] 60 (UtcTimestamp)
  AffirmStatus: number// [5] 940 (Int)
  ConfirmRejReason?: number// [6] 774 (Int)
  MatchStatus?: string// [7] 573 (String)
  Text?: string// [8] 58 (String)
  EncodedTextLen?: number// [9] 354 (Int)
  EncodedText?: Buffer// [10] 355 (RawData)
  StandardTrailer: IStandardTrailer// [11] SignatureLength.93, Signature.89, CheckSum.10
}
