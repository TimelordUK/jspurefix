import { IRelatedOrderGrp } from './related_order_grp'
import { IOrderQtyData } from './order_qty_data'
import { IMatchingInstructions } from './matching_instructions'
import { IDisplayInstruction } from './display_instruction'
import { IOrderAttributeGrp } from './order_attribute_grp'

export interface ITradeReportOrderDetail {
  OrderID?: string// [1] 37 (String)
  SecondaryOrderID?: string// [2] 198 (String)
  ClOrdID?: string// [3] 11 (String)
  SecondaryClOrdID?: string// [4] 526 (String)
  ListID?: string// [5] 66 (String)
  RefOrderID?: string// [6] 1080 (String)
  RefOrderIDSource?: string// [7] 1081 (String)
  RefOrdIDReason?: number// [8] 1431 (Int)
  RelatedOrderGrp?: IRelatedOrderGrp// [9] NoOrders.73, RelatedOrderID.2887 .. OrderOriginationFirmID.2835
  PreTradeAnonymity?: boolean// [10] 1091 (Boolean)
  OrdType?: string// [11] 40 (String)
  Price?: number// [12] 44 (Float)
  StopPx?: number// [13] 99 (Float)
  ExecInst?: string// [14] 18 (String)
  OrdStatus?: string// [15] 39 (String)
  OrderQtyData?: IOrderQtyData// [16] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  LeavesQty?: number// [17] 151 (Float)
  CumQty?: number// [18] 14 (Float)
  TimeInForce?: string// [19] 59 (String)
  ExpireTime?: Date// [20] 126 (UtcTimestamp)
  MatchingInstructions?: IMatchingInstructions// [21] NoMatchInst.1624, MatchInst.1625 .. MatchAttribValue.1627
  SelfMatchPreventionID?: string// [22] 2362 (String)
  SelfMatchPreventionInstruction?: number// [23] 2964 (Int)
  ExposureDuration?: number// [24] 1629 (Int)
  ExposureDurationUnit?: number// [25] 1916 (Int)
  DisplayInstruction?: IDisplayInstruction// [26] DisplayQty.1138, SecondaryDisplayQty.1082 .. RefreshQty.1088
  OrderCapacity?: string// [27] 528 (String)
  OrderRestrictions?: string// [28] 529 (String)
  BookingType?: number// [29] 775 (Int)
  OrigCustOrderCapacity?: number// [30] 1432 (Int)
  OrderOrigination?: number// [31] 1724 (Int)
  OrderAttributeGrp?: IOrderAttributeGrp// [32] NoOrderAttributes.2593, OrderAttributeType.2594, OrderAttributeValue.2595
  ExDestinationType?: number// [33] 2704 (Int)
  OrderInputDevice?: string// [34] 821 (String)
  LotType?: string// [35] 1093 (String)
  TransBkdTime?: Date// [36] 483 (UtcTimestamp)
  OrigOrdModTime?: Date// [37] 586 (UtcTimestamp)
  OrderPercentOfTotalVolume?: number// [38] 2766 (Float)
}
