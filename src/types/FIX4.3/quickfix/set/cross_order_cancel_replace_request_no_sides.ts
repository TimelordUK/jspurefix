import { IParties } from './parties'
import { ICrossOrderCancelReplaceRequestNoSidesNoAllocs } from './cross_order_cancel_replace_request_no_sides_no_allocs'
import { IOrderQtyData } from './order_qty_data'
import { ICommissionData } from './commission_data'

export interface ICrossOrderCancelReplaceRequestNoSides {
  Side: string// [1] 54 (String)
  OrigClOrdID: string// [2] 41 (String)
  ClOrdID: string// [3] 11 (String)
  SecondaryClOrdID?: string// [4] 526 (String)
  ClOrdLinkID?: string// [5] 583 (String)
  OrigOrdModTime?: Date// [6] 586 (UtcTimestamp)
  Parties: IParties// [7] NoPartyIDs.453, PartyID.448 .. PartySubID.523
  TradeOriginationDate?: string// [8] 229 (String)
  Account?: string// [9] 1 (String)
  AccountType?: number// [10] 581 (Int)
  DayBookingInst?: string// [11] 589 (String)
  BookingUnit?: string// [12] 590 (String)
  PreallocMethod?: string// [13] 591 (String)
  NoAllocs?: ICrossOrderCancelReplaceRequestNoSidesNoAllocs[]// [14] AllocAccount.79, IndividualAllocID.467 .. AllocQty.80
  QuantityType?: number// [15] 465 (Int)
  OrderQtyData: IOrderQtyData// [16] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  CommissionData: ICommissionData// [17] Commission.12, CommType.13 .. FundRenewWaiv.497
  OrderCapacity?: string// [18] 528 (String)
  OrderRestrictions?: string// [19] 529 (String)
  CustOrderCapacity?: number// [20] 582 (Int)
  ForexReq?: boolean// [21] 121 (Boolean)
  SettlCurrency?: string// [22] 120 (String)
  Text?: string// [23] 58 (String)
  EncodedTextLen?: number// [24] 354 (Length)
  EncodedText?: Buffer// [25] 355 (RawData)
  PositionEffect?: string// [26] 77 (String)
  CoveredOrUncovered?: number// [27] 203 (Int)
  CashMargin?: string// [28] 544 (String)
  ClearingFeeIndicator?: string// [29] 635 (String)
  SolicitedFlag?: boolean// [30] 377 (Boolean)
  SideComplianceID?: string// [31] 659 (String)
}
