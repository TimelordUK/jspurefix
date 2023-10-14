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
import { IRateSource } from './rate_source'

export interface IQuotReqGrp {
  Instrument: IInstrument// [1] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  FinancingDetails?: IFinancingDetails// [2] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [3] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  PrevClosePx?: number// [4] 140 (Float)
  QuoteRequestType?: number// [5] 303 (Int)
  QuoteType?: number// [6] 537 (Int)
  TradingSessionID?: string// [7] 336 (String)
  TradingSessionSubID?: string// [8] 625 (String)
  TradeOriginationDate?: Date// [9] 229 (LocalDate)
  Side?: string// [10] 54 (String)
  QtyType?: number// [11] 854 (Int)
  OrderQtyData?: IOrderQtyData// [12] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  MinQty?: number// [13] 110 (Float)
  SettlType?: string// [14] 63 (String)
  SettlDate?: Date// [15] 64 (LocalDate)
  SettlDate2?: Date// [16] 193 (LocalDate)
  OrderQty2?: number// [17] 192 (Float)
  Currency?: string// [18] 15 (String)
  Stipulations?: IStipulations[]// [19] StipulationType.233, StipulationValue.234
  Account?: string// [20] 1 (String)
  AcctIDSource?: number// [21] 660 (Int)
  AccountType?: number// [22] 581 (Int)
  QuotReqLegsGrp?: IQuotReqLegsGrp[]// [23] LegSymbol.600, LegSymbolSfx.601 .. LegRefID.654
  QuotQualGrp?: IQuotQualGrp[]// [24] QuoteQualifier.695
  QuotePriceType?: number// [25] 692 (Int)
  OrdType?: string// [26] 40 (String)
  ValidUntilTime?: Date// [27] 62 (UtcTimestamp)
  ExpireTime?: Date// [28] 126 (UtcTimestamp)
  TransactTime?: Date// [29] 60 (UtcTimestamp)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [30] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  PriceType?: number// [31] 423 (Int)
  Price?: number// [32] 44 (Float)
  Price2?: number// [33] 640 (Float)
  YieldData?: IYieldData// [34] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  Parties?: IParties[]// [35] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  SettlCurrency?: string// [36] 120 (String)
  RateSource?: IRateSource[]// [37] RateSource.1446, RateSourceType.1447, ReferencePage.1448
}
