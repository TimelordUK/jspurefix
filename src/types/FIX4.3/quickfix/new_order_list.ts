import { IStandardHeader } from './set/standard_header'
import { INewOrderListNoOrders } from './set/new_order_list_no_orders'
import { IStandardTrailer } from './set/standard_trailer'

export interface INewOrderList {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ListID: string// [2] 66 (String)
  BidID?: string// [3] 390 (String)
  ClientBidID?: string// [4] 391 (String)
  ProgRptReqs?: number// [5] 414 (Int)
  BidType: number// [6] 394 (Int)
  ProgPeriodInterval?: number// [7] 415 (Int)
  CancellationRights?: string// [8] 480 (String)
  MoneyLaunderingStatus?: string// [9] 481 (String)
  RegistID?: string// [10] 513 (String)
  ListExecInstType?: string// [11] 433 (String)
  ListExecInst?: string// [12] 69 (String)
  EncodedListExecInstLen?: number// [13] 352 (Length)
  EncodedListExecInst?: Buffer// [14] 353 (RawData)
  TotNoOrders: number// [15] 68 (Int)
  NoOrders: INewOrderListNoOrders[]// [16] ClOrdID.11, SecondaryClOrdID.526 .. NetMoney.118
  StandardTrailer: IStandardTrailer// [17] SignatureLength.93, Signature.89, CheckSum.10
}
