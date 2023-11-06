import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'

/*
*****************************************************
* OrderCancelReject can be found in Volume 4 of the *
*                                                   *
* specification                                     *
*****************************************************
*/
export interface IOrderCancelReject {
  OrderID: string// [2] 37 (String)
  OrderRequestID?: number// [2] 2422 (Int)
  SecondaryOrderID?: string// [2] 198 (String)
  SecondaryClOrdID?: string// [2] 526 (String)
  ClOrdID: string// [2] 11 (String)
  ClOrdLinkID?: string// [2] 583 (String)
  OrigClOrdID?: string// [2] 41 (String)
  OrdStatus: string// [2] 39 (String)
  WorkingIndicator?: boolean// [2] 636 (Boolean)
  OrigOrdModTime?: Date// [2] 586 (UtcTimestamp)
  ListID?: string// [2] 66 (String)
  Account?: string// [2] 1 (String)
  AcctIDSource?: number// [2] 660 (Int)
  AccountType?: number// [2] 581 (Int)
  TradeOriginationDate?: Date// [2] 229 (LocalDate)
  TradeDate?: Date// [2] 75 (LocalDate)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  CxlRejResponseTo: string// [2] 434 (String)
  CxlRejReason?: number// [2] 102 (Int)
  RejectText?: string// [2] 1328 (String)
  EncodedRejectTextLen?: number// [2] 1664 (Length)
  EncodedRejectText?: Buffer// [2] 1665 (RawData)
  ExDestination?: string// [2] 100 (String)
  ExDestinationIDSource?: string// [2] 1133 (String)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Parties?: IParties[]// [2] ID.448, Src.447 .. Qual.2376
}
