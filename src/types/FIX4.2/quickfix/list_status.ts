import { IStandardHeader } from './set/standard_header'
import { IListStatusNoOrders } from './set/list_status_no_orders'
import { IStandardTrailer } from './set/standard_trailer'

export interface IListStatus {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  ListID: string// [2] 66 (String)
  ListStatusType: number// [3] 429 (Int)
  NoRpts: number// [4] 82 (Int)
  ListOrderStatus: number// [5] 431 (Int)
  RptSeq: number// [6] 83 (Int)
  ListStatusText?: string// [7] 444 (String)
  EncodedListStatusTextLen?: number// [8] 445 (Length)
  EncodedListStatusText?: Buffer// [9] 446 (RawData)
  TransactTime?: Date// [10] 60 (UtcTimestamp)
  TotNoOrders: number// [11] 68 (Int)
  NoOrders: IListStatusNoOrders[]// [12] ClOrdID.11, CumQty.14 .. EncodedText.355
  StandardTrailer: IStandardTrailer// [13] SignatureLength.93, Signature.89, CheckSum.10
}
