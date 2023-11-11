import { IOrderQtyData } from './order_qty_data'
import { IMatchingInstructions } from './matching_instructions'
import { IDisplayInstruction } from './display_instruction'
import { IOrderAttributeGrp } from './order_attribute_grp'

export interface ITradeReportOrderDetail {
  OrderID?: string// [1] 37 (String)
  SecondaryOrderID?: string// [1] 198 (String)
  ClOrdID?: string// [1] 11 (String)
  SecondaryClOrdID?: string// [1] 526 (String)
  ListID?: string// [1] 66 (String)
  RefOrderID?: string// [1] 1080 (String)
  RefOrderIDSource?: string// [1] 1081 (String)
  RefOrdIDReason?: number// [1] 1431 (Int)
  PreTradeAnonymity?: boolean// [1] 1091 (Boolean)
  OrdType?: string// [1] 40 (String)
  Price?: number// [1] 44 (Float)
  StopPx?: number// [1] 99 (Float)
  ExecInst?: string// [1] 18 (String)
  OrdStatus?: string// [1] 39 (String)
  LeavesQty?: number// [1] 151 (Float)
  CumQty?: number// [1] 14 (Float)
  TimeInForce?: string// [1] 59 (String)
  ExpireTime?: Date// [1] 126 (UtcTimestamp)
  SelfMatchPreventionID?: string// [1] 2362 (String)
  ExposureDuration?: number// [1] 1629 (Int)
  ExposureDurationUnit?: number// [1] 1916 (Int)
  OrderCapacity?: string// [1] 528 (String)
  OrderRestrictions?: string// [1] 529 (String)
  BookingType?: number// [1] 775 (Int)
  OrigCustOrderCapacity?: number// [1] 1432 (Int)
  OrderOrigination?: number// [1] 1724 (Int)
  ExDestinationType?: number// [1] 2704 (Int)
  OrderInputDevice?: string// [1] 821 (String)
  LotType?: string// [1] 1093 (String)
  TransBkdTime?: Date// [1] 483 (UtcTimestamp)
  OrigOrdModTime?: Date// [1] 586 (UtcTimestamp)
  OrderQtyData?: IOrderQtyData// [1] Qty.38, Cash.152 .. RndMod.469
  MatchingInstructions?: IMatchingInstructions[]// [2] Inst.1625, MktID.1673 .. Valu.1627
  DisplayInstruction?: IDisplayInstruction// [3] DisplayQty.1138, SecDspQty.1082 .. RfrshQty.1088
  OrderAttributeGrp?: IOrderAttributeGrp[]// [4] Typ.139, Val.2595
}
