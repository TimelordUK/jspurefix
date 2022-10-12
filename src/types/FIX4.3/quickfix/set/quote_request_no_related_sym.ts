import { IInstrument } from './instrument'
import { IStipulations } from './stipulations'
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data'
import { IYieldData } from './yield_data'

export interface IQuoteRequestNoRelatedSym {
  Instrument: IInstrument// [1] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  PrevClosePx?: number// [2] 140 (Float)
  QuoteRequestType?: number// [3] 303 (Int)
  QuoteType?: number// [4] 537 (Int)
  TradingSessionID?: string// [5] 336 (String)
  TradingSessionSubID?: string// [6] 625 (String)
  TradeOriginationDate?: string// [7] 229 (String)
  Stipulations: IStipulations// [8] NoStipulations.232, StipulationType.233, StipulationValue.234
  Side?: string// [9] 54 (String)
  QuantityType?: number// [10] 465 (Int)
  OrderQty?: number// [11] 38 (Float)
  CashOrderQty?: number// [12] 152 (Float)
  SettlmntTyp?: string// [13] 63 (String)
  FutSettDate?: Date// [14] 64 (LocalDate)
  OrdType?: string// [15] 40 (String)
  FutSettDate2?: Date// [16] 193 (LocalDate)
  OrderQty2?: number// [17] 192 (Float)
  ExpireTime?: Date// [18] 126 (UtcTimestamp)
  TransactTime?: Date// [19] 60 (UtcTimestamp)
  Currency?: string// [20] 15 (String)
  SpreadOrBenchmarkCurveData: ISpreadOrBenchmarkCurveData// [21] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkCurvePoint.222
  PriceType?: number// [22] 423 (Int)
  Price?: number// [23] 44 (Float)
  Price2?: number// [24] 640 (Float)
  YieldData: IYieldData// [25] YieldType.235, Yield.236
}
