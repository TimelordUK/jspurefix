import { IOrderQtyData } from './order_qty_data'
import { IMatchingInstructions } from './matching_instructions'
import { IDisplayInstruction } from './display_instruction'
import { IOrderAttributeGrp } from './order_attribute_grp'

export interface ITradeReportOrderDetail {
  OrderID?: string// 37
  SecondaryOrderID?: string// 198
  ClOrdID?: string// 11
  SecondaryClOrdID?: string// 526
  ListID?: string// 66
  RefOrderID?: string// 1080
  RefOrderIDSource?: string// 1081
  RefOrdIDReason?: number// 1431
  PreTradeAnonymity?: boolean// 1091
  OrdType?: string// 40
  Price?: number// 44
  StopPx?: number// 99
  ExecInst?: string// 18
  OrdStatus?: string// 39
  LeavesQty?: number// 151
  CumQty?: number// 14
  TimeInForce?: string// 59
  ExpireTime?: Date// 126
  SelfMatchPreventionID?: string// 2362
  ExposureDuration?: number// 1629
  ExposureDurationUnit?: number// 1916
  OrderCapacity?: string// 528
  OrderRestrictions?: string// 529
  BookingType?: number// 775
  OrigCustOrderCapacity?: number// 1432
  OrderOrigination?: number// 1724
  ExDestinationType?: number// 2704
  OrderInputDevice?: string// 821
  LotType?: string// 1093
  TransBkdTime?: Date// 483
  OrigOrdModTime?: Date// 586
  OrderQtyData?: IOrderQtyData
  MatchingInstructions?: IMatchingInstructions[]
  DisplayInstruction?: IDisplayInstruction
  OrderAttributeGrp?: IOrderAttributeGrp[]
}
