import { IStandardHeader } from './set/standard_header'
import { ICrossOrderCancelReplaceRequestNoSides } from './set/cross_order_cancel_replace_request_no_sides'
import { IInstrument } from './set/instrument'
import { ICrossOrderCancelReplaceRequestNoTradingSessions } from './set/cross_order_cancel_replace_request_no_trading_sessions'
import { IStipulations } from './set/stipulations'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { IStandardTrailer } from './set/standard_trailer'

export interface ICrossOrderCancelReplaceRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  OrderID?: string// [2] 37 (String)
  CrossID: string// [3] 548 (String)
  OrigCrossID: string// [4] 551 (String)
  CrossType: number// [5] 549 (Int)
  CrossPrioritization: number// [6] 550 (Int)
  NoSides: ICrossOrderCancelReplaceRequestNoSides[]// [7] Side.54, OrigClOrdID.41 .. SideComplianceID.659
  Instrument?: IInstrument// [8] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  SettlmntTyp?: string// [9] 63 (String)
  FutSettDate?: Date// [10] 64 (LocalDate)
  HandlInst: string// [11] 21 (String)
  ExecInst?: string// [12] 18 (String)
  MinQty?: number// [13] 110 (Float)
  MaxFloor?: number// [14] 111 (Float)
  ExDestination?: string// [15] 100 (String)
  NoTradingSessions?: ICrossOrderCancelReplaceRequestNoTradingSessions[]// [16] TradingSessionID.336, TradingSessionSubID.625
  ProcessCode?: string// [17] 81 (String)
  PrevClosePx?: number// [18] 140 (Float)
  LocateReqd?: boolean// [19] 114 (Boolean)
  TransactTime: Date// [20] 60 (UtcTimestamp)
  Stipulations?: IStipulations// [21] NoStipulations.232, StipulationType.233, StipulationValue.234
  OrdType: string// [22] 40 (String)
  PriceType?: number// [23] 423 (Int)
  Price?: number// [24] 44 (Float)
  StopPx?: number// [25] 99 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [26] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkCurvePoint.222
  YieldData?: IYieldData// [27] YieldType.235, Yield.236
  Currency?: string// [28] 15 (String)
  ComplianceID?: string// [29] 376 (String)
  IOIid?: string// [30] 23 (String)
  QuoteID?: string// [31] 117 (String)
  TimeInForce?: string// [32] 59 (String)
  EffectiveTime?: Date// [33] 168 (UtcTimestamp)
  ExpireDate?: Date// [34] 432 (LocalDate)
  ExpireTime?: Date// [35] 126 (UtcTimestamp)
  GTBookingInst?: number// [36] 427 (Int)
  MaxShow?: number// [37] 210 (Float)
  PegDifference?: number// [38] 211 (Float)
  DiscretionInst?: string// [39] 388 (String)
  DiscretionOffset?: number// [40] 389 (Float)
  CancellationRights?: string// [41] 480 (String)
  MoneyLaunderingStatus?: string// [42] 481 (String)
  RegistID?: string// [43] 513 (String)
  Designation?: string// [44] 494 (String)
  AccruedInterestRate?: number// [45] 158 (Float)
  AccruedInterestAmt?: number// [46] 159 (Float)
  NetMoney?: number// [47] 118 (Float)
  StandardTrailer: IStandardTrailer// [48] SignatureLength.93, Signature.89, CheckSum.10
}
