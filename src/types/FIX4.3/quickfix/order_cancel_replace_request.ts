import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IOrderCancelReplaceRequestNoAllocs } from './set/order_cancel_replace_request_no_allocs'
import { IOrderCancelReplaceRequestNoTradingSessions } from './set/order_cancel_replace_request_no_trading_sessions'
import { IInstrument } from './set/instrument'
import { IOrderQtyData } from './set/order_qty_data'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { ICommissionData } from './set/commission_data'
import { IStandardTrailer } from './set/standard_trailer'

export interface IOrderCancelReplaceRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  OrderID?: string// [2] 37 (String)
  Parties?: IParties// [3] NoPartyIDs.453, PartyID.448 .. PartySubID.523
  TradeOriginationDate?: string// [4] 229 (String)
  OrigClOrdID: string// [5] 41 (String)
  ClOrdID: string// [6] 11 (String)
  SecondaryClOrdID?: string// [7] 526 (String)
  ClOrdLinkID?: string// [8] 583 (String)
  ListID?: string// [9] 66 (String)
  OrigOrdModTime?: Date// [10] 586 (UtcTimestamp)
  Account?: string// [11] 1 (String)
  AccountType?: number// [12] 581 (Int)
  DayBookingInst?: string// [13] 589 (String)
  BookingUnit?: string// [14] 590 (String)
  PreallocMethod?: string// [15] 591 (String)
  NoAllocs?: IOrderCancelReplaceRequestNoAllocs[]// [16] AllocAccount.79, IndividualAllocID.467 .. AllocQty.80
  SettlmntTyp?: string// [17] 63 (String)
  FutSettDate?: Date// [18] 64 (LocalDate)
  CashMargin?: string// [19] 544 (String)
  ClearingFeeIndicator?: string// [20] 635 (String)
  HandlInst: string// [21] 21 (String)
  ExecInst?: string// [22] 18 (String)
  MinQty?: number// [23] 110 (Float)
  MaxFloor?: number// [24] 111 (Float)
  ExDestination?: string// [25] 100 (String)
  NoTradingSessions?: IOrderCancelReplaceRequestNoTradingSessions[]// [26] TradingSessionID.336, TradingSessionSubID.625
  Instrument?: IInstrument// [27] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  Side: string// [28] 54 (String)
  TransactTime: Date// [29] 60 (UtcTimestamp)
  QuantityType?: number// [30] 465 (Int)
  OrderQtyData?: IOrderQtyData// [31] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  OrdType: string// [32] 40 (String)
  PriceType?: number// [33] 423 (Int)
  Price?: number// [34] 44 (Float)
  StopPx?: number// [35] 99 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [36] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkCurvePoint.222
  YieldData?: IYieldData// [37] YieldType.235, Yield.236
  PegDifference?: number// [38] 211 (Float)
  DiscretionInst?: string// [39] 388 (String)
  DiscretionOffset?: number// [40] 389 (Float)
  ComplianceID?: string// [41] 376 (String)
  SolicitedFlag?: boolean// [42] 377 (Boolean)
  Currency?: string// [43] 15 (String)
  TimeInForce?: string// [44] 59 (String)
  EffectiveTime?: Date// [45] 168 (UtcTimestamp)
  ExpireDate?: Date// [46] 432 (LocalDate)
  ExpireTime?: Date// [47] 126 (UtcTimestamp)
  GTBookingInst?: number// [48] 427 (Int)
  CommissionData?: ICommissionData// [49] Commission.12, CommType.13 .. FundRenewWaiv.497
  OrderCapacity?: string// [50] 528 (String)
  OrderRestrictions?: string// [51] 529 (String)
  CustOrderCapacity?: number// [52] 582 (Int)
  Rule80A?: string// [53] 47 (String)
  ForexReq?: boolean// [54] 121 (Boolean)
  SettlCurrency?: string// [55] 120 (String)
  Text?: string// [56] 58 (String)
  EncodedTextLen?: number// [57] 354 (Length)
  EncodedText?: Buffer// [58] 355 (RawData)
  FutSettDate2?: Date// [59] 193 (LocalDate)
  OrderQty2?: number// [60] 192 (Float)
  Price2?: number// [61] 640 (Float)
  PositionEffect?: string// [62] 77 (String)
  CoveredOrUncovered?: number// [63] 203 (Int)
  MaxShow?: number// [64] 210 (Float)
  LocateReqd?: boolean// [65] 114 (Boolean)
  CancellationRights?: string// [66] 480 (String)
  MoneyLaunderingStatus?: string// [67] 481 (String)
  RegistID?: string// [68] 513 (String)
  Designation?: string// [69] 494 (String)
  AccruedInterestRate?: number// [70] 158 (Float)
  AccruedInterestAmt?: number// [71] 159 (Float)
  NetMoney?: number// [72] 118 (Float)
  StandardTrailer: IStandardTrailer// [73] SignatureLength.93, Signature.89, CheckSum.10
}
