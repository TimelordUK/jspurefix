import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The list status message is issued as the response to a List  *
* Status Request message sent in an unsolicited fashion by the *
* sell-side.                                                   *
****************************************************************
*/
export interface IListStatus {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  ListID: string// [2] 66 (String)
  ListStatusType: number// [3] 429 (Int)
  NoRpts: number// [4] 82 (Int)
  ListOrderStatus: number// [5] 431 (Int)
  RptSeq: number// [6] 83 (Int)
  ListStatusText?: string// [7] 444 (String)
  EncodedListStatusTextLen?: number// [8] 445 (Int)
  EncodedListStatusText?: Buffer// [9] 446 (RawData)
  TransactTime?: Date// [10] 60 (UtcTimestamp)
  TotNoOrders: number// [11] 68 (Int)
  NoOrders: number// [12] 73 (Int)
  ClOrdID: string// [13] 11 (String)
  CumQty: number// [14] 14 (Float)
  OrdStatus: string// [15] 39 (String)
  LeavesQty: number// [16] 151 (Float)
  CxlQty: number// [17] 84 (Float)
  AvgPx: number// [18] 6 (Float)
  OrdRejReason?: number// [19] 103 (Int)
  Text?: string// [20] 58 (String)
  EncodedTextLen?: number// [21] 354 (Int)
  EncodedText?: Buffer// [22] 355 (RawData)
  StandardTrailer: IStandardTrailer// [23] SignatureLength.93, Signature.89, CheckSum.10
}
