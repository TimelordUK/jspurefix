import { IInstrument } from './instrument'
import { IInstrumentExtension } from './instrument_extension'
import { IFinancingDetails } from './financing_details'
import { ISecurityTradingRules } from './security_trading_rules'
import { IStrikeRules } from './strike_rules'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IStipulations } from './stipulations'
import { ISecLstUpdRelSymsLegGrp } from './sec_lst_upd_rel_syms_leg_grp'
import { IRelatedInstrumentGrp } from './related_instrument_grp'
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data'
import { IYieldData } from './yield_data'

export interface ISecLstUpdRelSymGrpNoRelatedSym {
  ListUpdateAction?: string// [1] 1324 (String)
  Instrument?: IInstrument// [2] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [3] DeliveryForm.668, PctAtRisk.869 .. ReferenceDataDateType.2748
  FinancingDetails?: IFinancingDetails// [4] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  SecurityTradingRules?: ISecurityTradingRules// [5] BaseTradingRules.1205, StartTickPriceRange.1206 .. NestedInstrAttribValue.1211
  StrikeRules?: IStrikeRules// [6] NoStrikeRules.1201, StrikeRuleID.1223 .. MaturityMonthYearIncrement.1229
  UndInstrmtGrp?: IUndInstrmtGrp// [7] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  Currency?: string// [8] 15 (String)
  CurrencyCodeSource?: string// [9] 2897 (String)
  Stipulations?: IStipulations// [10] NoStipulations.232, StipulationType.233, StipulationValue.234
  SecLstUpdRelSymsLegGrp?: ISecLstUpdRelSymsLegGrp// [11] NoLegs.555, LegSymbol.600 .. LegBenchmarkPriceType.680
  RelatedInstrumentGrp?: IRelatedInstrumentGrp// [12] NoRelatedInstruments.1647, RelatedInstrumentType.1648 .. RelatedToDividendPeriodXIDRef.2417
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [13] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [14] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  RelSymTransactTime?: Date// [15] 1504 (UtcTimestamp)
  Text?: string// [16] 58 (String)
  EncodedTextLen?: number// [17] 354 (Length)
  EncodedText?: Buffer// [18] 355 (RawData)
}
