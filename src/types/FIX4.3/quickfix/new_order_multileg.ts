import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { INewOrderMultilegNoAllocs } from './set/new_order_multileg_no_allocs'
import { INewOrderMultilegNoTradingSessions } from './set/new_order_multileg_no_trading_sessions'
import { IInstrument } from './set/instrument'
import { INewOrderMultilegNoLegs } from './set/new_order_multileg_no_legs'
import { IOrderQtyData } from './set/order_qty_data'
import { ICommissionData } from './set/commission_data'
import { IStandardTrailer } from './set/standard_trailer'

export interface INewOrderMultileg {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ClOrdID: string// [2] 11 (String)
  SecondaryClOrdID?: string// [3] 526 (String)
  ClOrdLinkID?: string// [4] 583 (String)
  Parties?: IParties// [5] NoPartyIDs.453, PartyID.448 .. PartySubID.523
  Account?: string// [6] 1 (String)
  AccountType?: number// [7] 581 (Int)
  DayBookingInst?: string// [8] 589 (String)
  BookingUnit?: string// [9] 590 (String)
  PreallocMethod?: string// [10] 591 (String)
  NoAllocs?: INewOrderMultilegNoAllocs[]// [11] AllocAccount.79, IndividualAllocID.467, AllocQty.80
  SettlmntTyp?: string// [12] 63 (String)
  FutSettDate?: Date// [13] 64 (LocalDate)
  CashMargin?: string// [14] 544 (String)
  ClearingFeeIndicator?: string// [15] 635 (String)
  HandlInst: string// [16] 21 (String)
  ExecInst?: string// [17] 18 (String)
  MinQty?: number// [18] 110 (Float)
  MaxFloor?: number// [19] 111 (Float)
  ExDestination?: string// [20] 100 (String)
  NoTradingSessions?: INewOrderMultilegNoTradingSessions[]// [21] TradingSessionID.336, TradingSessionSubID.625
  ProcessCode?: string// [22] 81 (String)
  Side: string// [23] 54 (String)
  Instrument?: IInstrument// [24] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  PrevClosePx?: number// [25] 140 (Float)
  NoLegs: INewOrderMultilegNoLegs[]// [26] LegSymbol.600, LegSymbolSfx.601 .. LegFutSettDate.588
  LocateReqd?: boolean// [27] 114 (Boolean)
  TransactTime: Date// [28] 60 (UtcTimestamp)
  QuantityType?: number// [29] 465 (Int)
  OrderQtyData?: IOrderQtyData// [30] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  OrdType: string// [31] 40 (String)
  PriceType?: number// [32] 423 (Int)
  Price?: number// [33] 44 (Float)
  StopPx?: number// [34] 99 (Float)
  Currency?: string// [35] 15 (String)
  ComplianceID?: string// [36] 376 (String)
  SolicitedFlag?: boolean// [37] 377 (Boolean)
  IOIid?: string// [38] 23 (String)
  QuoteID?: string// [39] 117 (String)
  TimeInForce?: string// [40] 59 (String)
  EffectiveTime?: Date// [41] 168 (UtcTimestamp)
  ExpireDate?: Date// [42] 432 (LocalDate)
  ExpireTime?: Date// [43] 126 (UtcTimestamp)
  GTBookingInst?: number// [44] 427 (Int)
  CommissionData?: ICommissionData// [45] Commission.12, CommType.13 .. FundRenewWaiv.497
  OrderCapacity?: string// [46] 528 (String)
  OrderRestrictions?: string// [47] 529 (String)
  CustOrderCapacity?: number// [48] 582 (Int)
  ForexReq?: boolean// [49] 121 (Boolean)
  SettlCurrency?: string// [50] 120 (String)
  Text?: string// [51] 58 (String)
  EncodedTextLen?: number// [52] 354 (Length)
  EncodedText?: Buffer// [53] 355 (RawData)
  PositionEffect?: string// [54] 77 (String)
  CoveredOrUncovered?: number// [55] 203 (Int)
  MaxShow?: number// [56] 210 (Float)
  PegDifference?: number// [57] 211 (Float)
  DiscretionInst?: string// [58] 388 (String)
  DiscretionOffset?: number// [59] 389 (Float)
  CancellationRights?: string// [60] 480 (String)
  MoneyLaunderingStatus?: string// [61] 481 (String)
  RegistID?: string// [62] 513 (String)
  Designation?: string// [63] 494 (String)
  MultiLegRptTypeReq?: number// [64] 563 (Int)
  NetMoney?: number// [65] 118 (Float)
  StandardTrailer: IStandardTrailer// [66] SignatureLength.93, Signature.89, CheckSum.10
}
