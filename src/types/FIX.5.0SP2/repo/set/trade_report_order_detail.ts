import { IOrderQtyData } from './order_qty_data'
import { IDisplayInstruction } from './display_instruction'

export interface ITradeReportOrderDetail {
  OrderID?: string// 37
  SecondaryOrderID?: string// 198
  ClOrdID?: string// 11
  SecondaryClOrdID?: string// 526
  ListID?: string// 66
  RefOrderID?: string// 1080
  RefOrderIDSource?: string// 1081
  RefOrdIDReason?: number// 1431
  OrdType?: string// 40
  Price?: number// 44
  StopPx?: number// 99
  ExecInst?: string// 18
  OrdStatus?: string// 39
  OrderQtyData?: IOrderQtyData
  LeavesQty?: number// 151
  CumQty?: number// 14
  TimeInForce?: string// 59
  ExpireTime?: Date// 126
  DisplayInstruction?: IDisplayInstruction
  OrderCapacity?: string// 528
  OrderRestrictions?: string// 529
  OrigCustOrderCapacity?: number// 1432
  OrderInputDevice?: string// 821
  LotType?: string// 1093
  TransBkdTime?: Date// 483
  OrigOrdModTime?: Date// 586
  BookingType?: number// 775
}
