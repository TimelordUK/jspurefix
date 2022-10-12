import { IStandardHeader } from './set/standard_header'
import { INewOrderCrossNoSides } from './set/new_order_cross_no_sides'
import { IInstrument } from './set/instrument'
import { INewOrderCrossNoTradingSessions } from './set/new_order_cross_no_trading_sessions'
import { IStipulations } from './set/stipulations'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { IStandardTrailer } from './set/standard_trailer'

export interface INewOrderCross {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  CrossID: string// [2] 548 (String)
  CrossType: number// [3] 549 (Int)
  CrossPrioritization: number// [4] 550 (Int)
  NoSides: INewOrderCrossNoSides[]// [5] Side.54, ClOrdID.11 .. SideComplianceID.659
  Instrument?: IInstrument// [6] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  SettlmntTyp?: string// [7] 63 (String)
  FutSettDate?: Date// [8] 64 (LocalDate)
  HandlInst: string// [9] 21 (String)
  ExecInst?: string// [10] 18 (String)
  MinQty?: number// [11] 110 (Float)
  MaxFloor?: number// [12] 111 (Float)
  ExDestination?: string// [13] 100 (String)
  NoTradingSessions?: INewOrderCrossNoTradingSessions[]// [14] TradingSessionID.336, TradingSessionSubID.625
  ProcessCode?: string// [15] 81 (String)
  PrevClosePx?: number// [16] 140 (Float)
  LocateReqd?: boolean// [17] 114 (Boolean)
  TransactTime: Date// [18] 60 (UtcTimestamp)
  Stipulations?: IStipulations// [19] NoStipulations.232, StipulationType.233, StipulationValue.234
  OrdType: string// [20] 40 (String)
  PriceType?: number// [21] 423 (Int)
  Price?: number// [22] 44 (Float)
  StopPx?: number// [23] 99 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [24] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkCurvePoint.222
  YieldData?: IYieldData// [25] YieldType.235, Yield.236
  Currency?: string// [26] 15 (String)
  ComplianceID?: string// [27] 376 (String)
  IOIid?: string// [28] 23 (String)
  QuoteID?: string// [29] 117 (String)
  TimeInForce?: string// [30] 59 (String)
  EffectiveTime?: Date// [31] 168 (UtcTimestamp)
  ExpireDate?: Date// [32] 432 (LocalDate)
  ExpireTime?: Date// [33] 126 (UtcTimestamp)
  GTBookingInst?: number// [34] 427 (Int)
  MaxShow?: number// [35] 210 (Float)
  PegDifference?: number// [36] 211 (Float)
  DiscretionInst?: string// [37] 388 (String)
  DiscretionOffset?: number// [38] 389 (Float)
  CancellationRights?: string// [39] 480 (String)
  MoneyLaunderingStatus?: string// [40] 481 (String)
  RegistID?: string// [41] 513 (String)
  Designation?: string// [42] 494 (String)
  AccruedInterestRate?: number// [43] 158 (Float)
  AccruedInterestAmt?: number// [44] 159 (Float)
  NetMoney?: number// [45] 118 (Float)
  StandardTrailer: IStandardTrailer// [46] SignatureLength.93, Signature.89, CheckSum.10
}
