import { IParties } from './parties'
import { IPreAllocGrp } from './pre_alloc_grp'
import { IOrderQtyData } from './order_qty_data'
import { ICommissionData } from './commission_data'

export interface ISideCrossOrdModGrp {
  Side: string// [1] 54 (String)
  OrigClOrdID?: string// [2] 41 (String)
  ClOrdID: string// [3] 11 (String)
  SecondaryClOrdID?: string// [4] 526 (String)
  ClOrdLinkID?: string// [5] 583 (String)
  Parties?: IParties[]// [6] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  TradeOriginationDate?: Date// [7] 229 (LocalDate)
  TradeDate?: Date// [8] 75 (LocalDate)
  Account?: string// [9] 1 (String)
  AcctIDSource?: number// [10] 660 (Int)
  AccountType?: number// [11] 581 (Int)
  DayBookingInst?: string// [12] 589 (String)
  BookingUnit?: string// [13] 590 (String)
  PreallocMethod?: string// [14] 591 (String)
  AllocID?: string// [15] 70 (String)
  PreAllocGrp?: IPreAllocGrp[]// [16] AllocAccount.79, AllocAcctIDSource.661 .. AllocQty.80
  QtyType?: number// [17] 854 (Int)
  OrderQtyData: IOrderQtyData// [18] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  CommissionData?: ICommissionData// [19] Commission.12, CommType.13 .. FundRenewWaiv.497
  OrderCapacity?: string// [20] 528 (String)
  OrderRestrictions?: string// [21] 529 (String)
  PreTradeAnonymity?: boolean// [22] 1091 (Boolean)
  CustOrderCapacity?: number// [23] 582 (Int)
  ForexReq?: boolean// [24] 121 (Boolean)
  SettlCurrency?: string// [25] 120 (String)
  BookingType?: number// [26] 775 (Int)
  Text?: string// [27] 58 (String)
  EncodedTextLen?: number// [28] 354 (Int)
  EncodedText?: Buffer// [29] 355 (RawData)
  PositionEffect?: string// [30] 77 (String)
  CoveredOrUncovered?: number// [31] 203 (Int)
  CashMargin?: string// [32] 544 (String)
  ClearingFeeIndicator?: string// [33] 635 (String)
  SolicitedFlag?: boolean// [34] 377 (Boolean)
  SideComplianceID?: string// [35] 659 (String)
  SideTimeInForce?: Date// [36] 962 (UtcTimestamp)
}
