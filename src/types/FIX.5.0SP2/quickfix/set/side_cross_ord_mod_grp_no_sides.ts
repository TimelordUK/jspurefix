import { IParties } from './parties'
import { ISideCrossLegGrp } from './side_cross_leg_grp'
import { IPreAllocGrp } from './pre_alloc_grp'
import { IOrderQtyData } from './order_qty_data'
import { ICommissionData } from './commission_data'
import { ICommissionDataGrp } from './commission_data_grp'

export interface ISideCrossOrdModGrpNoSides {
  Side: string// [1] 54 (String)
  ShortMarkingExemptIndicator?: boolean// [2] 2102 (Boolean)
  OrigClOrdID?: string// [3] 41 (String)
  ClOrdID: string// [4] 11 (String)
  SecondaryClOrdID?: string// [5] 526 (String)
  ClOrdLinkID?: string// [6] 583 (String)
  OrigOrdModTime?: Date// [7] 586 (UtcTimestamp)
  Parties?: IParties// [8] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  SideCrossLegGrp?: ISideCrossLegGrp// [9] NoCrossLegs.1829, LegRefID.654 .. LegShortSaleExemptionReason.1689
  SideShortSaleExemptionReason?: number// [10] 1690 (Int)
  TradeOriginationDate?: Date// [11] 229 (LocalDate)
  TradeDate?: Date// [12] 75 (LocalDate)
  Account?: string// [13] 1 (String)
  AcctIDSource?: number// [14] 660 (Int)
  AccountType?: number// [15] 581 (Int)
  DayBookingInst?: string// [16] 589 (String)
  BookingUnit?: string// [17] 590 (String)
  PreallocMethod?: string// [18] 591 (String)
  AllocID?: string// [19] 70 (String)
  PreAllocGrp?: IPreAllocGrp// [20] NoAllocs.78, AllocAccount.79 .. CurrentCostBasis.1755
  QtyType?: number// [21] 854 (Int)
  OrderQtyData?: IOrderQtyData// [22] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  CommissionData?: ICommissionData// [23] Commission.12, CommType.13 .. FundRenewWaiv.497
  CommissionDataGrp?: ICommissionDataGrp// [24] NoCommissions.2639, CommissionAmount.2640 .. EncodedCommissionDesc.2652
  OrderCapacity?: string// [25] 528 (String)
  OrderRestrictions?: string// [26] 529 (String)
  OrderOrigination?: number// [27] 1724 (Int)
  OriginatingDeptID?: string// [28] 1725 (String)
  ReceivingDeptID?: string// [29] 1726 (String)
  RoutingArrangmentIndicator?: number// [30] 2883 (Int)
  PreTradeAnonymity?: boolean// [31] 1091 (Boolean)
  CustOrderCapacity?: number// [32] 582 (Int)
  ForexReq?: boolean// [33] 121 (Boolean)
  SettlCurrency?: string// [34] 120 (String)
  SettlCurrencyCodeSource?: string// [35] 2899 (String)
  BookingType?: number// [36] 775 (Int)
  Text?: string// [37] 58 (String)
  EncodedTextLen?: number// [38] 354 (Length)
  EncodedText?: Buffer// [39] 355 (RawData)
  ClearingAccountType?: number// [40] 1816 (Int)
  PositionEffect?: string// [41] 77 (String)
  CoveredOrUncovered?: number// [42] 203 (Int)
  CashMargin?: string// [43] 544 (String)
  ClearingFeeIndicator?: string// [44] 635 (String)
  SolicitedFlag?: boolean// [45] 377 (Boolean)
  SideComplianceID?: string// [46] 659 (String)
  SideTimeInForce?: Date// [47] 962 (UtcTimestamp)
}
