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

export interface IQuotReqGrpNoRelatedSym {
  Instrument: IInstrument// [1] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  FinancingDetails: IFinancingDetails// [2] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp: IUndInstrmtGrp// [3] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingStipValue.889
  PrevClosePx?: number// [4] 140 (Float)
  QuoteRequestType?: number// [5] 303 (Int)
  QuoteType?: number// [6] 537 (Int)
  TradingSessionID?: string// [7] 336 (String)
  TradingSessionSubID?: string// [8] 625 (String)
  TradeOriginationDate?: Date// [9] 229 (LocalDate)
  Side?: string// [10] 54 (String)
  QtyType?: number// [11] 854 (Int)
  OrderQtyData: IOrderQtyData// [12] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  SettlType?: string// [13] 63 (String)
  SettlDate?: Date// [14] 64 (LocalDate)
  SettlDate2?: Date// [15] 193 (LocalDate)
  OrderQty2?: number// [16] 192 (Float)
  Currency?: string// [17] 15 (String)
  Stipulations: IStipulations// [18] NoStipulations.232, StipulationType.233, StipulationValue.234
  Account?: string// [19] 1 (String)
  AcctIDSource?: number// [20] 660 (Int)
  AccountType?: number// [21] 581 (Int)
  QuotReqLegsGrp: IQuotReqLegsGrp// [22] NoLegs.555, LegSymbol.600 .. LegBenchmarkPriceType.680
  QuotQualGrp: IQuotQualGrp// [23] NoQuoteQualifiers.735, QuoteQualifier.695
  QuotePriceType?: number// [24] 692 (Int)
  OrdType?: string// [25] 40 (String)
  ValidUntilTime?: Date// [26] 62 (UtcTimestamp)
  ExpireTime?: Date// [27] 126 (UtcTimestamp)
  TransactTime?: Date// [28] 60 (UtcTimestamp)
  SpreadOrBenchmarkCurveData: ISpreadOrBenchmarkCurveData// [29] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  PriceType?: number// [30] 423 (Int)
  Price?: number// [31] 44 (Float)
  Price2?: number// [32] 640 (Float)
  YieldData: IYieldData// [33] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  Parties: IParties// [34] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
}
