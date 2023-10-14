import { IOrderQtyData } from './order_qty_data'
import { IDisplayInstruction } from './display_instruction'

export interface ITradeReportOrderDetail {
  OrderID?: string// [1] 37 (String)
  SecondaryOrderID?: string// [2] 198 (String)
  ClOrdID?: string// [3] 11 (String)
  SecondaryClOrdID?: string// [4] 526 (String)
  ListID?: string// [5] 66 (String)
  RefOrderID?: string// [6] 1080 (String)
  RefOrderIDSource?: string// [7] 1081 (String)
  RefOrdIDReason?: number// [8] 1431 (Int)
  OrdType?: string// [9] 40 (String)
  Price?: number// [10] 44 (Float)
  StopPx?: number// [11] 99 (Float)
  ExecInst?: string// [12] 18 (String)
  OrdStatus?: string// [13] 39 (String)
  OrderQtyData?: IOrderQtyData// [14] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  LeavesQty?: number// [15] 151 (Float)
  CumQty?: number// [16] 14 (Float)
  TimeInForce?: string// [17] 59 (String)
  ExpireTime?: Date// [18] 126 (UtcTimestamp)
  DisplayInstruction?: IDisplayInstruction// [19] DisplayQty.1138, SecondaryDisplayQty.1082 .. RefreshQty.1088
  OrderCapacity?: string// [20] 528 (String)
  OrderRestrictions?: string// [21] 529 (String)
  OrigCustOrderCapacity?: number// [22] 1432 (Int)
  OrderInputDevice?: string// [23] 821 (String)
  LotType?: string// [24] 1093 (String)
  TransBkdTime?: Date// [25] 483 (UtcTimestamp)
  OrigOrdModTime?: Date// [26] 586 (UtcTimestamp)
  BookingType?: number// [27] 775 (Int)
}
