import { IInstrument } from './instrument'
import { IInstrumentExtension } from './instrument_extension'
import { IFinancingDetails } from './financing_details'
import { ISecurityTradingRules } from './security_trading_rules'
import { IStrikeRules } from './strike_rules'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IStipulations } from './stipulations'
import { IInstrmtLegSecListGrp } from './instrmt_leg_sec_list_grp'
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data'
import { IYieldData } from './yield_data'

export interface ISecListGrp {
  Instrument?: IInstrument// [1] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  InstrumentExtension?: IInstrumentExtension// [2] DeliveryForm.668, PctAtRisk.869 .. InstrAttribValue.872
  FinancingDetails?: IFinancingDetails// [3] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  SecurityTradingRules?: ISecurityTradingRules// [4] BaseTradingRules.1205, StartTickPriceRange.1206 .. NestedInstrAttribValue.1211
  StrikeRules?: IStrikeRules[]// [5] StrikeRuleID.1223, StartStrikePxRange.1202 .. MaturityMonthYearIncrement.1229
  UndInstrmtGrp?: IUndInstrmtGrp// [6] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  Currency?: string// [7] 15 (String)
  Stipulations?: IStipulations[]// [8] StipulationType.233, StipulationValue.234
  InstrmtLegSecListGrp?: IInstrmtLegSecListGrp[]// [9] LegSymbol.600, LegSymbolSfx.601 .. LegBenchmarkPriceType.680
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [10] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [11] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  Text?: string// [12] 58 (String)
  EncodedTextLen?: number// [13] 354 (Int)
  EncodedText?: Buffer// [14] 355 (RawData)
  RelSymTransactTime?: Date// [15] 1504 (UtcTimestamp)
}
