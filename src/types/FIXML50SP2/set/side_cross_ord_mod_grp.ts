import { IParties } from './parties'
import { ISideCrossLegGrp } from './side_cross_leg_grp'
import { IPreAllocGrp } from './pre_alloc_grp'
import { IOrderQtyData } from './order_qty_data'
import { ICommissionData } from './commission_data'
import { ICommissionDataGrp } from './commission_data_grp'

export interface ISideCrossOrdModGrp {
  Side: string// [1] 54 (String)
  ShortMarkingExemptIndicator?: boolean// [1] 2102 (Boolean)
  OrigClOrdID?: string// [1] 41 (String)
  ClOrdID: string// [1] 11 (String)
  SecondaryClOrdID?: string// [1] 526 (String)
  ClOrdLinkID?: string// [1] 583 (String)
  SideShortSaleExemptionReason?: number// [1] 1690 (Int)
  TradeOriginationDate?: Date// [1] 229 (LocalDate)
  TradeDate?: Date// [1] 75 (LocalDate)
  Account?: string// [1] 1 (String)
  AcctIDSource?: number// [1] 660 (Int)
  AccountType?: number// [1] 581 (Int)
  DayBookingInst?: string// [1] 589 (String)
  BookingUnit?: string// [1] 590 (String)
  PreallocMethod?: string// [1] 591 (String)
  AllocID?: string// [1] 70 (String)
  QtyType?: number// [1] 854 (Int)
  OrderCapacity?: string// [1] 528 (String)
  OrderRestrictions?: string// [1] 529 (String)
  PreTradeAnonymity?: boolean// [1] 1091 (Boolean)
  CustOrderCapacity?: number// [1] 582 (Int)
  ForexReq?: boolean// [1] 121 (Boolean)
  SettlCurrency?: string// [1] 120 (String)
  BookingType?: number// [1] 775 (Int)
  Text?: string// [1] 58 (String)
  EncodedTextLen?: number// [1] 354 (Length)
  EncodedText?: Buffer// [1] 355 (RawData)
  ClearingAccountType?: number// [1] 1816 (Int)
  PositionEffect?: string// [1] 77 (String)
  CoveredOrUncovered?: number// [1] 203 (Int)
  CashMargin?: string// [1] 544 (String)
  ClearingFeeIndicator?: string// [1] 635 (String)
  SolicitedFlag?: boolean// [1] 377 (Boolean)
  SideComplianceID?: string// [1] 659 (String)
  SideTimeInForce?: Date// [1] 962 (UtcTimestamp)
  Parties?: IParties[]// [1] ID.448, Src.447 .. Qual.2376
  SideCrossLegGrp?: ISideCrossLegGrp[]// [2] RefID.654, OrdQty.685 .. ShrtSaleExmptnRsn.1689
  PreAllocGrp?: IPreAllocGrp[]// [3] Acct.79, ActIDSrc.661 .. CurCostBasis.1755
  OrderQtyData: IOrderQtyData// [4] Qty.38, Cash.152 .. RndMod.469
  CommissionData?: ICommissionData// [5] Comm.12, CommTyp.13 .. FundRenewWaiv.497
  CommissionDataGrp?: ICommissionDataGrp[]// [6] Amt.2640, Typ.2641 .. EncDesc.2652
}
