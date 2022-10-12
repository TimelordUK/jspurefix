import { IParties } from './parties'
import { INewOrderCrossNoSidesNoAllocs } from './new_order_cross_no_sides_no_allocs'
import { IOrderQtyData } from './order_qty_data'
import { ICommissionData } from './commission_data'

export interface INewOrderCrossNoSides {
  Side: string// [1] 54 (String)
  ClOrdID: string// [2] 11 (String)
  SecondaryClOrdID?: string// [3] 526 (String)
  ClOrdLinkID?: string// [4] 583 (String)
  Parties: IParties// [5] NoPartyIDs.453, PartyID.448 .. PartySubID.523
  TradeOriginationDate?: string// [6] 229 (String)
  Account?: string// [7] 1 (String)
  AccountType?: number// [8] 581 (Int)
  DayBookingInst?: string// [9] 589 (String)
  BookingUnit?: string// [10] 590 (String)
  PreallocMethod?: string// [11] 591 (String)
  NoAllocs?: INewOrderCrossNoSidesNoAllocs[]// [12] AllocAccount.79, IndividualAllocID.467 .. AllocQty.80
  QuantityType?: number// [13] 465 (Int)
  OrderQtyData: IOrderQtyData// [14] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  CommissionData: ICommissionData// [15] Commission.12, CommType.13 .. FundRenewWaiv.497
  OrderCapacity?: string// [16] 528 (String)
  OrderRestrictions?: string// [17] 529 (String)
  CustOrderCapacity?: number// [18] 582 (Int)
  ForexReq?: boolean// [19] 121 (Boolean)
  SettlCurrency?: string// [20] 120 (String)
  Text?: string// [21] 58 (String)
  EncodedTextLen?: number// [22] 354 (Length)
  EncodedText?: Buffer// [23] 355 (RawData)
  PositionEffect?: string// [24] 77 (String)
  CoveredOrUncovered?: number// [25] 203 (Int)
  CashMargin?: string// [26] 544 (String)
  ClearingFeeIndicator?: string// [27] 635 (String)
  SolicitedFlag?: boolean// [28] 377 (Boolean)
  SideComplianceID?: string// [29] 659 (String)
}
