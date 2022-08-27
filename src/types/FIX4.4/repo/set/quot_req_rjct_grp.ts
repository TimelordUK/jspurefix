import { IInstrument } from './instrument'
import { IFinancingDetails } from './financing_details'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IOrderQtyData } from './order_qty_data'
import { IStipulations } from './stipulations'
import { IQuotReqLegsGrp } from './quot_req_legs_grp'
import { IQuotQualGrp } from './quot_qual_grp'
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data'
import { IYieldData } from './yield_data'
import { IParties } from './parties'

export interface IQuotReqRjctGrp {
  Instrument: IInstrument// [1] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  FinancingDetails?: IFinancingDetails// [2] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp[]// [3] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingStipValue.889
  PrevClosePx?: number// [4] 140 (Float)
  QuoteRequestType?: number// [5] 303 (Int)
  QuoteType?: number// [6] 537 (Int)
  TradingSessionID?: string// [7] 336 (String)
  TradingSessionSubID?: string// [8] 625 (String)
  TradeOriginationDate?: Date// [9] 229 (LocalDate)
  Side?: string// [10] 54 (String)
  QtyType?: number// [11] 854 (Int)
  OrderQtyData?: IOrderQtyData// [12] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  SettlType?: string// [13] 63 (String)
  SettlDate?: Date// [14] 64 (LocalDate)
  SettlDate2?: Date// [15] 193 (LocalDate)
  OrderQty2?: number// [16] 192 (Float)
  Currency?: string// [17] 15 (String)
  Stipulations?: IStipulations[]// [18] StipulationType.233, StipulationValue.234
  Account?: string// [19] 1 (String)
  AcctIDSource?: number// [20] 660 (Int)
  AccountType?: number// [21] 581 (Int)
  QuotReqLegsGrp?: IQuotReqLegsGrp[]// [22] LegSymbol.600, LegSymbolSfx.601 .. LegBenchmarkPriceType.680
  QuotQualGrp?: IQuotQualGrp[]// [23] QuoteQualifier.695
  QuotePriceType?: number// [24] 692 (Int)
  OrdType?: string// [25] 40 (String)
  ExpireTime?: Date// [26] 126 (UtcTimestamp)
  TransactTime?: Date// [27] 60 (UtcTimestamp)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [28] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  PriceType?: number// [29] 423 (Int)
  Price?: number// [30] 44 (Float)
  Price2?: number// [31] 640 (Float)
  YieldData?: IYieldData// [32] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  Parties?: IParties[]// [33] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
}
