import { IParties } from './parties'
import { ISideCrossLegGrp } from './side_cross_leg_grp'
import { IPreAllocGrp } from './pre_alloc_grp'
import { IOrderQtyData } from './order_qty_data'
import { ICommissionData } from './commission_data'
import { ICommissionDataGrp } from './commission_data_grp'

export interface ISideCrossOrdModGrp {
  Side: string// 54
  ShortMarkingExemptIndicator?: boolean// 2102
  OrigClOrdID?: string// 41
  ClOrdID: string// 11
  SecondaryClOrdID?: string// 526
  ClOrdLinkID?: string// 583
  SideShortSaleExemptionReason?: number// 1690
  TradeOriginationDate?: Date// 229
  TradeDate?: Date// 75
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  DayBookingInst?: string// 589
  BookingUnit?: string// 590
  PreallocMethod?: string// 591
  AllocID?: string// 70
  QtyType?: number// 854
  OrderCapacity?: string// 528
  OrderRestrictions?: string// 529
  PreTradeAnonymity?: boolean// 1091
  CustOrderCapacity?: number// 582
  ForexReq?: boolean// 121
  SettlCurrency?: string// 120
  BookingType?: number// 775
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  ClearingAccountType?: number// 1816
  PositionEffect?: string// 77
  CoveredOrUncovered?: number// 203
  CashMargin?: string// 544
  ClearingFeeIndicator?: string// 635
  SolicitedFlag?: boolean// 377
  SideComplianceID?: string// 659
  SideTimeInForce?: Date// 962
  Parties?: IParties[]
  SideCrossLegGrp?: ISideCrossLegGrp[]
  PreAllocGrp?: IPreAllocGrp[]
  OrderQtyData: IOrderQtyData
  CommissionData?: ICommissionData
  CommissionDataGrp?: ICommissionDataGrp[]
}
