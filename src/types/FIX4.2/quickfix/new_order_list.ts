import { IStandardHeader } from './set/standard_header'
import { INewOrderListNoOrders } from './set/new_order_list_no_orders'
import { IStandardTrailer } from './set/standard_trailer'

export interface INewOrderList {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  ListID: string// [2] 66 (String)
  BidID?: string// [3] 390 (String)
  ClientBidID?: string// [4] 391 (String)
  ProgRptReqs?: number// [5] 414 (Int)
  BidType: number// [6] 394 (Int)
  ProgPeriodInterval?: number// [7] 415 (Int)
  ListExecInstType?: string// [8] 433 (String)
  ListExecInst?: string// [9] 69 (String)
  EncodedListExecInstLen?: number// [10] 352 (Length)
  EncodedListExecInst?: Buffer// [11] 353 (RawData)
  TotNoOrders: number// [12] 68 (Int)
  NoOrders: INewOrderListNoOrders[]// [13] ClOrdID.11, ListSeqNo.67 .. ClearingAccount.440
  StandardTrailer: IStandardTrailer// [14] SignatureLength.93, Signature.89, CheckSum.10
}
