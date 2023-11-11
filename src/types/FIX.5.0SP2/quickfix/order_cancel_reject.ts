import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IStandardTrailer } from './set/standard_trailer'

export interface IOrderCancelReject {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  OrderID: string// [2] 37 (String)
  OrderRequestID?: number// [3] 2422 (Int)
  SecondaryOrderID?: string// [4] 198 (String)
  SecondaryClOrdID?: string// [5] 526 (String)
  ClOrdID: string// [6] 11 (String)
  ClOrdLinkID?: string// [7] 583 (String)
  OrigClOrdID?: string// [8] 41 (String)
  OrdStatus: string// [9] 39 (String)
  WorkingIndicator?: boolean// [10] 636 (Boolean)
  OrigOrdModTime?: Date// [11] 586 (UtcTimestamp)
  ListID?: string// [12] 66 (String)
  Account?: string// [13] 1 (String)
  AcctIDSource?: number// [14] 660 (Int)
  AccountType?: number// [15] 581 (Int)
  TradeOriginationDate?: Date// [16] 229 (LocalDate)
  TradeDate?: Date// [17] 75 (LocalDate)
  TransactTime?: Date// [18] 60 (UtcTimestamp)
  CxlRejResponseTo: string// [19] 434 (String)
  CxlRejReason?: number// [20] 102 (Int)
  RejectText?: string// [21] 1328 (String)
  EncodedRejectTextLen?: number// [22] 1664 (Length)
  EncodedRejectText?: Buffer// [23] 1665 (RawData)
  ExDestination?: string// [24] 100 (String)
  ExDestinationIDSource?: string// [25] 1133 (String)
  Parties?: IParties// [26] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  Text?: string// [27] 58 (String)
  EncodedTextLen?: number// [28] 354 (Length)
  EncodedText?: Buffer// [29] 355 (RawData)
  StandardTrailer: IStandardTrailer// [30] SignatureLength.93, Signature.89, CheckSum.10
}
