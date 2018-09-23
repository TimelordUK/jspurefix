import { IParties } from './parties'
import { ISideCrossLegGrp } from './side_cross_leg_grp'
import { IPreAllocGrp } from './pre_alloc_grp'
import { IOrderQtyData } from './order_qty_data'
import { ICommissionData } from './commission_data'
import { ICommissionDataGrp } from './commission_data_grp'

export interface ISideCrossOrdModGrp {
  RelativeValueSide: number// 2532
  ShortMarkingExemptIndicator?: string// 2102
  AffectedOrigClOrdID?: string// 1824
  ClOrdID: string// 11
  SecondaryClOrdID?: string// 526
  ClOrdLinkID?: string// 583
  SideShortSaleExemptionReason?: number// 1690
  TradeOriginationDate?: Date// 229
  TradeDate?: Date// 75
  LegAccount?: string// 2680
  AcctIDSource?: number// 660
  AllocAccountType?: number// 798
  DayBookingInst?: string// 589
  BookingUnit?: string// 590
  PreallocMethod?: string// 591
  AllocID?: string// 70
  LegQtyType?: number// 1591
  OrderCapacity?: string// 528
  OrderRestrictions?: string// 529
  PreTradeAnonymity?: string// 1091
  AllocCustomerCapacity?: string// 993
  ForexReq?: string// 121
  UnderlyingProvisionCashSettlCurrency?: string// 42167
  BookingType?: number// 775
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  LegClearingAccountType?: number// 1817
  LegPositionEffect?: string// 564
  CoveredOrUncovered?: number// 203
  CashMargin?: string// 544
  AllocClearingFeeIndicator?: string// 1136
  SolicitedFlag?: string// 377
  SideComplianceID?: string// 659
  SideTimeInForce?: Date// 962
  Parties?: IParties[]
  SideCrossLegGrp?: ISideCrossLegGrp[]
  PreAllocGrp?: IPreAllocGrp[]
  OrderQtyData: IOrderQtyData
  CommissionData?: ICommissionData
  CommissionDataGrp?: ICommissionDataGrp[]
}
