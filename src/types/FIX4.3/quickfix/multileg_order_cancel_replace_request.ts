import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IMultilegOrderCancelReplaceRequestNoAllocs } from './set/multileg_order_cancel_replace_request_no_allocs'
import { IMultilegOrderCancelReplaceRequestNoTradingSessions } from './set/multileg_order_cancel_replace_request_no_trading_sessions'
import { IInstrument } from './set/instrument'
import { IMultilegOrderCancelReplaceRequestNoLegs } from './set/multileg_order_cancel_replace_request_no_legs'
import { IOrderQtyData } from './set/order_qty_data'
import { ICommissionData } from './set/commission_data'
import { IStandardTrailer } from './set/standard_trailer'

export interface IMultilegOrderCancelReplaceRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  OrderID?: string// [2] 37 (String)
  OrigClOrdID: string// [3] 41 (String)
  ClOrdID: string// [4] 11 (String)
  SecondaryClOrdID?: string// [5] 526 (String)
  ClOrdLinkID?: string// [6] 583 (String)
  OrigOrdModTime?: Date// [7] 586 (UtcTimestamp)
  Parties?: IParties// [8] NoPartyIDs.453, PartyID.448 .. PartySubID.523
  Account?: string// [9] 1 (String)
  AccountType?: number// [10] 581 (Int)
  DayBookingInst?: string// [11] 589 (String)
  BookingUnit?: string// [12] 590 (String)
  PreallocMethod?: string// [13] 591 (String)
  NoAllocs?: IMultilegOrderCancelReplaceRequestNoAllocs[]// [14] AllocAccount.79, IndividualAllocID.467, AllocQty.80
  SettlmntTyp?: string// [15] 63 (String)
  FutSettDate?: Date// [16] 64 (LocalDate)
  CashMargin?: string// [17] 544 (String)
  ClearingFeeIndicator?: string// [18] 635 (String)
  HandlInst: string// [19] 21 (String)
  ExecInst?: string// [20] 18 (String)
  MinQty?: number// [21] 110 (Float)
  MaxFloor?: number// [22] 111 (Float)
  ExDestination?: string// [23] 100 (String)
  NoTradingSessions?: IMultilegOrderCancelReplaceRequestNoTradingSessions[]// [24] TradingSessionID.336, TradingSessionSubID.625
  ProcessCode?: string// [25] 81 (String)
  Side: string// [26] 54 (String)
  Instrument?: IInstrument// [27] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  PrevClosePx?: number// [28] 140 (Float)
  NoLegs: IMultilegOrderCancelReplaceRequestNoLegs[]// [29] LegSymbol.600, LegSymbolSfx.601 .. LegFutSettDate.588
  LocateReqd?: boolean// [30] 114 (Boolean)
  TransactTime: Date// [31] 60 (UtcTimestamp)
  QuantityType?: number// [32] 465 (Int)
  OrderQtyData?: IOrderQtyData// [33] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  OrdType: string// [34] 40 (String)
  PriceType?: number// [35] 423 (Int)
  Price?: number// [36] 44 (Float)
  StopPx?: number// [37] 99 (Float)
  Currency?: string// [38] 15 (String)
  ComplianceID?: string// [39] 376 (String)
  SolicitedFlag?: boolean// [40] 377 (Boolean)
  IOIid?: string// [41] 23 (String)
  QuoteID?: string// [42] 117 (String)
  TimeInForce?: string// [43] 59 (String)
  EffectiveTime?: Date// [44] 168 (UtcTimestamp)
  ExpireDate?: Date// [45] 432 (LocalDate)
  ExpireTime?: Date// [46] 126 (UtcTimestamp)
  GTBookingInst?: number// [47] 427 (Int)
  CommissionData?: ICommissionData// [48] Commission.12, CommType.13 .. FundRenewWaiv.497
  OrderCapacity?: string// [49] 528 (String)
  OrderRestrictions?: string// [50] 529 (String)
  CustOrderCapacity?: number// [51] 582 (Int)
  ForexReq?: boolean// [52] 121 (Boolean)
  SettlCurrency?: string// [53] 120 (String)
  Text?: string// [54] 58 (String)
  EncodedTextLen?: number// [55] 354 (Length)
  EncodedText?: Buffer// [56] 355 (RawData)
  PositionEffect?: string// [57] 77 (String)
  CoveredOrUncovered?: number// [58] 203 (Int)
  MaxShow?: number// [59] 210 (Float)
  PegDifference?: number// [60] 211 (Float)
  DiscretionInst?: string// [61] 388 (String)
  DiscretionOffset?: number// [62] 389 (Float)
  CancellationRights?: string// [63] 480 (String)
  MoneyLaunderingStatus?: string// [64] 481 (String)
  RegistID?: string// [65] 513 (String)
  Designation?: string// [66] 494 (String)
  MultiLegRptTypeReq?: number// [67] 563 (Int)
  NetMoney?: number// [68] 118 (Float)
  StandardTrailer: IStandardTrailer// [69] SignatureLength.93, Signature.89, CheckSum.10
}
