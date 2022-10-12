import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The order cancel reject message is issued by the broker upon *
* receipt of a cancel request or cancel/replace request        *
* message which cannot be honored.                             *
****************************************************************
*/
export interface IOrderCancelReject {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  OrderID: string// [2] 37 (String)
  SecondaryOrderID?: string// [3] 198 (String)
  ClOrdID: string// [4] 11 (String)
  OrigClOrdID: string// [5] 41 (String)
  OrdStatus: string// [6] 39 (String)
  ListID?: string// [7] 66 (String)
  Account?: string// [8] 1 (String)
  TransactTime?: Date// [9] 60 (UtcTimestamp)
  CxlRejResponseTo: string// [10] 434 (String)
  CxlRejReason?: number// [11] 102 (Int)
  Text?: string// [12] 58 (String)
  EncodedTextLen?: number// [13] 354 (Int)
  EncodedText?: Buffer// [14] 355 (RawData)
  StandardTrailer: IStandardTrailer// [15] SignatureLength.93, Signature.89, CheckSum.10
}
