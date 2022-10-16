import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface IOrderCancelReject {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  OrderID: string// [2] 37 (String)
  SecondaryOrderID?: string// [3] 198 (String)
  ClOrdID: string// [4] 11 (String)
  OrigClOrdID: string// [5] 41 (String)
  OrdStatus: string// [6] 39 (String)
  ClientID?: string// [7] 109 (String)
  ExecBroker?: string// [8] 76 (String)
  ListID?: string// [9] 66 (String)
  Account?: string// [10] 1 (String)
  TransactTime?: Date// [11] 60 (UtcTimestamp)
  CxlRejResponseTo: string// [12] 434 (String)
  CxlRejReason?: number// [13] 102 (Int)
  Text?: string// [14] 58 (String)
  EncodedTextLen?: number// [15] 354 (Length)
  EncodedText?: Buffer// [16] 355 (RawData)
  StandardTrailer: IStandardTrailer// [17] SignatureLength.93, Signature.89, CheckSum.10
}
