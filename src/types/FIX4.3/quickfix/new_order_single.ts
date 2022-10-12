import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { INewOrderSingleNoAllocs } from './set/new_order_single_no_allocs'
import { INewOrderSingleNoTradingSessions } from './set/new_order_single_no_trading_sessions'
import { IInstrument } from './set/instrument'
import { IStipulations } from './set/stipulations'
import { IOrderQtyData } from './set/order_qty_data'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { ICommissionData } from './set/commission_data'
import { IStandardTrailer } from './set/standard_trailer'

export interface INewOrderSingle {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ClOrdID: string// [2] 11 (String)
  SecondaryClOrdID?: string// [3] 526 (String)
  ClOrdLinkID?: string// [4] 583 (String)
  Parties?: IParties// [5] NoPartyIDs.453, PartyID.448 .. PartySubID.523
  TradeOriginationDate?: string// [6] 229 (String)
  Account?: string// [7] 1 (String)
  AccountType?: number// [8] 581 (Int)
  DayBookingInst?: string// [9] 589 (String)
  BookingUnit?: string// [10] 590 (String)
  PreallocMethod?: string// [11] 591 (String)
  NoAllocs?: INewOrderSingleNoAllocs[]// [12] AllocAccount.79, IndividualAllocID.467 .. AllocQty.80
  SettlmntTyp?: string// [13] 63 (String)
  FutSettDate?: Date// [14] 64 (LocalDate)
  CashMargin?: string// [15] 544 (String)
  ClearingFeeIndicator?: string// [16] 635 (String)
  HandlInst: string// [17] 21 (String)
  ExecInst?: string// [18] 18 (String)
  MinQty?: number// [19] 110 (Float)
  MaxFloor?: number// [20] 111 (Float)
  ExDestination?: string// [21] 100 (String)
  NoTradingSessions?: INewOrderSingleNoTradingSessions[]// [22] TradingSessionID.336, TradingSessionSubID.625
  ProcessCode?: string// [23] 81 (String)
  Instrument?: IInstrument// [24] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  PrevClosePx?: number// [25] 140 (Float)
  Side: string// [26] 54 (String)
  LocateReqd?: boolean// [27] 114 (Boolean)
  TransactTime: Date// [28] 60 (UtcTimestamp)
  Stipulations?: IStipulations// [29] NoStipulations.232, StipulationType.233, StipulationValue.234
  QuantityType?: number// [30] 465 (Int)
  OrderQtyData?: IOrderQtyData// [31] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  OrdType: string// [32] 40 (String)
  PriceType?: number// [33] 423 (Int)
  Price?: number// [34] 44 (Float)
  StopPx?: number// [35] 99 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [36] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkCurvePoint.222
  YieldData?: IYieldData// [37] YieldType.235, Yield.236
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
  Rule80A?: string// [52] 47 (String)
  ForexReq?: boolean// [53] 121 (Boolean)
  SettlCurrency?: string// [54] 120 (String)
  Text?: string// [55] 58 (String)
  EncodedTextLen?: number// [56] 354 (Length)
  EncodedText?: Buffer// [57] 355 (RawData)
  FutSettDate2?: Date// [58] 193 (LocalDate)
  OrderQty2?: number// [59] 192 (Float)
  Price2?: number// [60] 640 (Float)
  PositionEffect?: string// [61] 77 (String)
  CoveredOrUncovered?: number// [62] 203 (Int)
  MaxShow?: number// [63] 210 (Float)
  PegDifference?: number// [64] 211 (Float)
  DiscretionInst?: string// [65] 388 (String)
  DiscretionOffset?: number// [66] 389 (Float)
  CancellationRights?: string// [67] 480 (String)
  MoneyLaunderingStatus?: string// [68] 481 (String)
  RegistID?: string// [69] 513 (String)
  Designation?: string// [70] 494 (String)
  AccruedInterestRate?: number// [71] 158 (Float)
  AccruedInterestAmt?: number// [72] 159 (Float)
  NetMoney?: number// [73] 118 (Float)
  StandardTrailer: IStandardTrailer// [74] SignatureLength.93, Signature.89, CheckSum.10
}
