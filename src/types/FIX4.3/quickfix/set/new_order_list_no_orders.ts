import { IParties } from './parties'
import { INewOrderListNoOrdersNoAllocs } from './new_order_list_no_orders_no_allocs'
import { INewOrderListNoOrdersNoTradingSessions } from './new_order_list_no_orders_no_trading_sessions'
import { IInstrument } from './instrument'
import { IStipulations } from './stipulations'
import { IOrderQtyData } from './order_qty_data'
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data'
import { IYieldData } from './yield_data'
import { ICommissionData } from './commission_data'

export interface INewOrderListNoOrders {
  ClOrdID: string// [1] 11 (String)
  SecondaryClOrdID?: string// [2] 526 (String)
  ListSeqNo: number// [3] 67 (Int)
  ClOrdLinkID?: string// [4] 583 (String)
  SettlInstMode?: string// [5] 160 (String)
  Parties: IParties// [6] NoPartyIDs.453, PartyID.448 .. PartySubID.523
  TradeOriginationDate?: string// [7] 229 (String)
  Account?: string// [8] 1 (String)
  AccountType?: number// [9] 581 (Int)
  DayBookingInst?: string// [10] 589 (String)
  BookingUnit?: string// [11] 590 (String)
  PreallocMethod?: string// [12] 591 (String)
  NoAllocs?: INewOrderListNoOrdersNoAllocs[]// [13] AllocAccount.79, IndividualAllocID.467 .. AllocQty.80
  SettlmntTyp?: string// [14] 63 (String)
  FutSettDate?: Date// [15] 64 (LocalDate)
  CashMargin?: string// [16] 544 (String)
  ClearingFeeIndicator?: string// [17] 635 (String)
  HandlInst?: string// [18] 21 (String)
  ExecInst?: string// [19] 18 (String)
  MinQty?: number// [20] 110 (Float)
  MaxFloor?: number// [21] 111 (Float)
  ExDestination?: string// [22] 100 (String)
  NoTradingSessions?: INewOrderListNoOrdersNoTradingSessions[]// [23] TradingSessionID.336, TradingSessionSubID.625
  ProcessCode?: string// [24] 81 (String)
  Instrument: IInstrument// [25] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  PrevClosePx?: number// [26] 140 (Float)
  Side: string// [27] 54 (String)
  SideValueInd?: number// [28] 401 (Int)
  LocateReqd?: boolean// [29] 114 (Boolean)
  TransactTime?: Date// [30] 60 (UtcTimestamp)
  Stipulations: IStipulations// [31] NoStipulations.232, StipulationType.233, StipulationValue.234
  QuantityType?: number// [32] 465 (Int)
  OrderQtyData: IOrderQtyData// [33] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  OrdType?: string// [34] 40 (String)
  PriceType?: number// [35] 423 (Int)
  Price?: number// [36] 44 (Float)
  StopPx?: number// [37] 99 (Float)
  SpreadOrBenchmarkCurveData: ISpreadOrBenchmarkCurveData// [38] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkCurvePoint.222
  YieldData: IYieldData// [39] YieldType.235, Yield.236
  Currency?: string// [40] 15 (String)
  ComplianceID?: string// [41] 376 (String)
  SolicitedFlag?: boolean// [42] 377 (Boolean)
  IOIid?: string// [43] 23 (String)
  QuoteID?: string// [44] 117 (String)
  TimeInForce?: string// [45] 59 (String)
  EffectiveTime?: Date// [46] 168 (UtcTimestamp)
  ExpireDate?: Date// [47] 432 (LocalDate)
  ExpireTime?: Date// [48] 126 (UtcTimestamp)
  GTBookingInst?: number// [49] 427 (Int)
  CommissionData: ICommissionData// [50] Commission.12, CommType.13 .. FundRenewWaiv.497
  OrderCapacity?: string// [51] 528 (String)
  OrderRestrictions?: string// [52] 529 (String)
  CustOrderCapacity?: number// [53] 582 (Int)
  Rule80A?: string// [54] 47 (String)
  ForexReq?: boolean// [55] 121 (Boolean)
  SettlCurrency?: string// [56] 120 (String)
  Text?: string// [57] 58 (String)
  EncodedTextLen?: number// [58] 354 (Length)
  EncodedText?: Buffer// [59] 355 (RawData)
  FutSettDate2?: Date// [60] 193 (LocalDate)
  OrderQty2?: number// [61] 192 (Float)
  Price2?: number// [62] 640 (Float)
  PositionEffect?: string// [63] 77 (String)
  CoveredOrUncovered?: number// [64] 203 (Int)
  MaxShow?: number// [65] 210 (Float)
  PegDifference?: number// [66] 211 (Float)
  DiscretionInst?: string// [67] 388 (String)
  DiscretionOffset?: number// [68] 389 (Float)
  Designation?: string// [69] 494 (String)
  AccruedInterestRate?: number// [70] 158 (Float)
  AccruedInterestAmt?: number// [71] 159 (Float)
  NetMoney?: number// [72] 118 (Float)
}
