import { IInstrument } from './instrument'
import { IFinancingDetails } from './financing_details'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IOrderQtyData } from './order_qty_data'
import { IRateSource } from './rate_source'
import { IStipulations } from './stipulations'
import { IQuotReqLegsGrp } from './quot_req_legs_grp'
import { IQuotQualGrp } from './quot_qual_grp'
import { IRegulatoryTradeIDGrp } from './regulatory_trade_id_grp'
import { IPriceQualifierGrp } from './price_qualifier_grp'
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data'
import { IYieldData } from './yield_data'
import { IParties } from './parties'

export interface IQuotReqGrpNoRelatedSym {
  Instrument?: IInstrument// [1] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  FinancingDetails?: IFinancingDetails// [2] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [3] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  PrevClosePx?: number// [4] 140 (Float)
  QuoteRequestType?: number// [5] 303 (Int)
  QuoteID?: string// [6] 117 (String)
  SecondaryQuoteID?: string// [7] 1751 (String)
  QuoteType?: number// [8] 537 (Int)
  TradingSessionID?: string// [9] 336 (String)
  TradingSessionSubID?: string// [10] 625 (String)
  TradeOriginationDate?: Date// [11] 229 (LocalDate)
  NumOfCompetitors?: number// [12] 1913 (Int)
  Side?: string// [13] 54 (String)
  QtyType?: number// [14] 854 (Int)
  OrderQtyData?: IOrderQtyData// [15] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  MinQty?: number// [16] 110 (Float)
  SettlType?: string// [17] 63 (String)
  SettlDate?: Date// [18] 64 (LocalDate)
  SettlDate2?: Date// [19] 193 (LocalDate)
  OrderQty2?: number// [20] 192 (Float)
  Currency?: string// [21] 15 (String)
  CurrencyCodeSource?: string// [22] 2897 (String)
  SettlCurrency?: string// [23] 120 (String)
  SettlCurrencyCodeSource?: string// [24] 2899 (String)
  RateSource?: IRateSource// [25] NoRateSources.1445, RateSource.1446 .. FXBenchmarkRateFix.2796
  Stipulations?: IStipulations// [26] NoStipulations.232, StipulationType.233, StipulationValue.234
  Account?: string// [27] 1 (String)
  AcctIDSource?: number// [28] 660 (Int)
  AccountType?: number// [29] 581 (Int)
  QuotReqLegsGrp?: IQuotReqLegsGrp// [30] NoLegs.555, LegSymbol.600 .. LegRefID.654
  QuotQualGrp?: IQuotQualGrp// [31] NoQuoteQualifiers.735, QuoteQualifier.695
  TrdType?: number// [32] 828 (Int)
  RegulatoryTransactionType?: number// [33] 2347 (Int)
  RegulatoryTradeIDGrp?: IRegulatoryTradeIDGrp// [34] NoRegulatoryTradeIDs.1907, RegulatoryTradeID.1903 .. RegulatoryTradeIDScope.2397
  NegotiationMethod?: number// [35] 2115 (Int)
  QuotePriceType?: number// [36] 692 (Int)
  PriceQualifierGrp?: IPriceQualifierGrp// [37] NoPriceQualifiers.2709, PriceQualifier.2710
  OrdType?: string// [38] 40 (String)
  ValidUntilTime?: Date// [39] 62 (UtcTimestamp)
  ExpireTime?: Date// [40] 126 (UtcTimestamp)
  ResponseTime?: Date// [41] 1914 (UtcTimestamp)
  QuoteDisplayTime?: Date// [42] 1915 (UtcTimestamp)
  ExposureDuration?: number// [43] 1629 (Int)
  ExposureDurationUnit?: number// [44] 1916 (Int)
  TransactTime?: Date// [45] 60 (UtcTimestamp)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [46] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  PriceType?: number// [47] 423 (Int)
  Price?: number// [48] 44 (Float)
  MidPx?: number// [49] 631 (Float)
  Price2?: number// [50] 640 (Float)
  YieldData?: IYieldData// [51] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  Parties?: IParties// [52] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TradeContinuation?: number// [53] 1937 (Int)
  TradeContinuationText?: string// [54] 2374 (String)
  EncodedTradeContinuationTextLen?: number// [55] 2372 (Length)
  EncodedTradeContinuationText?: Buffer// [56] 2371 (RawData)
  StrikeTime?: Date// [57] 443 (UtcTimestamp)
}
