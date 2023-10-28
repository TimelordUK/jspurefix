import { IInstrument } from './instrument'
import { IFinancingDetails } from './financing_details'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IOrderQtyData } from './order_qty_data'
import { IStipulations } from './stipulations'
import { IQuotReqLegsGrp } from './quot_req_legs_grp'
import { IQuotQualGrp } from './quot_qual_grp'
import { IPriceQualifierGrp } from './price_qualifier_grp'
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data'
import { IYieldData } from './yield_data'
import { IParties } from './parties'

export interface IQuotReqRjctGrpNoRelatedSym {
  Instrument?: IInstrument// [1] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  FinancingDetails?: IFinancingDetails// [2] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [3] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
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
  CurrencyCodeSource?: string// [18] 2897 (String)
  Stipulations?: IStipulations// [19] NoStipulations.232, StipulationType.233, StipulationValue.234
  Account?: string// [20] 1 (String)
  AcctIDSource?: number// [21] 660 (Int)
  AccountType?: number// [22] 581 (Int)
  QuotReqLegsGrp?: IQuotReqLegsGrp// [23] NoLegs.555, LegSymbol.600 .. LegRefID.654
  QuotQualGrp?: IQuotQualGrp// [24] NoQuoteQualifiers.735, QuoteQualifier.695
  NegotiationMethod?: number// [25] 2115 (Int)
  QuotePriceType?: number// [26] 692 (Int)
  PriceQualifierGrp?: IPriceQualifierGrp// [27] NoPriceQualifiers.2709, PriceQualifier.2710
  OrdType?: string// [28] 40 (String)
  ExpireTime?: Date// [29] 126 (UtcTimestamp)
  TransactTime?: Date// [30] 60 (UtcTimestamp)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [31] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  PriceType?: number// [32] 423 (Int)
  Price?: number// [33] 44 (Float)
  Price2?: number// [34] 640 (Float)
  YieldData?: IYieldData// [35] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  Parties?: IParties// [36] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  StrikeTime?: Date// [37] 443 (UtcTimestamp)
}
