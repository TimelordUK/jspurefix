import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface IOrderCancelReject {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  OrderID: string// [2] 37 (String)
  SecondaryOrderID?: string// [3] 198 (String)
  SecondaryClOrdID?: string// [4] 526 (String)
  ClOrdID: string// [5] 11 (String)
  ClOrdLinkID?: string// [6] 583 (String)
  OrigClOrdID: string// [7] 41 (String)
  OrdStatus: string// [8] 39 (String)
  WorkingIndicator?: boolean// [9] 636 (Boolean)
  OrigOrdModTime?: Date// [10] 586 (UtcTimestamp)
  ListID?: string// [11] 66 (String)
  Account?: string// [12] 1 (String)
  AcctIDSource?: number// [13] 660 (Int)
  AccountType?: number// [14] 581 (Int)
  TradeOriginationDate?: Date// [15] 229 (LocalDate)
  TradeDate?: Date// [16] 75 (LocalDate)
  TransactTime?: Date// [17] 60 (UtcTimestamp)
  CxlRejResponseTo: string// [18] 434 (String)
  CxlRejReason?: number// [19] 102 (Int)
  Text?: string// [20] 58 (String)
  EncodedTextLen?: number// [21] 354 (Length)
  EncodedText?: Buffer// [22] 355 (RawData)
  StandardTrailer: IStandardTrailer// [23] SignatureLength.93, Signature.89, CheckSum.10
}
