import { IParties } from './parties'
import { IPreAllocGrp } from './pre_alloc_grp'
import { IOrderQtyData } from './order_qty_data'
import { ICommissionData } from './commission_data'

export interface ISideCrossOrdModGrp {
  Side: string// [1] 54 (String)
  ClOrdID: string// [2] 11 (String)
  SecondaryClOrdID?: string// [3] 526 (String)
  ClOrdLinkID?: string// [4] 583 (String)
  Parties?: IParties[]// [5] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  TradeOriginationDate?: Date// [6] 229 (LocalDate)
  TradeDate?: Date// [7] 75 (LocalDate)
  Account?: string// [8] 1 (String)
  AcctIDSource?: number// [9] 660 (Int)
  AccountType?: number// [10] 581 (Int)
  DayBookingInst?: string// [11] 589 (String)
  BookingUnit?: string// [12] 590 (String)
  PreallocMethod?: string// [13] 591 (String)
  AllocID?: string// [14] 70 (String)
  PreAllocGrp?: IPreAllocGrp[]// [15] AllocAccount.79, AllocAcctIDSource.661 .. AllocQty.80
  QtyType?: number// [16] 854 (Int)
  OrderQtyData: IOrderQtyData// [17] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  CommissionData?: ICommissionData// [18] Commission.12, CommType.13 .. FundRenewWaiv.497
  OrderCapacity?: string// [19] 528 (String)
  OrderRestrictions?: string// [20] 529 (String)
  CustOrderCapacity?: number// [21] 582 (Int)
  ForexReq?: boolean// [22] 121 (Boolean)
  SettlCurrency?: string// [23] 120 (String)
  BookingType?: number// [24] 775 (Int)
  Text?: string// [25] 58 (String)
  EncodedTextLen?: number// [26] 354 (Int)
  EncodedText?: Buffer// [27] 355 (RawData)
  PositionEffect?: string// [28] 77 (String)
  CoveredOrUncovered?: number// [29] 203 (Int)
  CashMargin?: string// [30] 544 (String)
  ClearingFeeIndicator?: string// [31] 635 (String)
  SolicitedFlag?: boolean// [32] 377 (Boolean)
  SideComplianceID?: string// [33] 659 (String)
}
