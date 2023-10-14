import { IInstrument } from './instrument'
import { IInstrumentExtension } from './instrument_extension'
import { IFinancingDetails } from './financing_details'
import { ISecurityTradingRules } from './security_trading_rules'
import { IStrikeRules } from './strike_rules'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IStipulations } from './stipulations'
import { ISecLstUpdRelSymsLegGrp } from './sec_lst_upd_rel_syms_leg_grp'
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data'
import { IYieldData } from './yield_data'

export interface ISecLstUpdRelSymGrp {
  ListUpdateAction?: string// [1] 1324 (String)
  Instrument?: IInstrument// [2] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  InstrumentExtension?: IInstrumentExtension// [3] DeliveryForm.668, PctAtRisk.869 .. InstrAttribValue.872
  FinancingDetails?: IFinancingDetails// [4] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  SecurityTradingRules?: ISecurityTradingRules// [5] BaseTradingRules.1205, StartTickPriceRange.1206 .. NestedInstrAttribValue.1211
  StrikeRules?: IStrikeRules[]// [6] StrikeRuleID.1223, StartStrikePxRange.1202 .. MaturityMonthYearIncrement.1229
  UndInstrmtGrp?: IUndInstrmtGrp// [7] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  Currency?: string// [8] 15 (String)
  Stipulations?: IStipulations[]// [9] StipulationType.233, StipulationValue.234
  SecLstUpdRelSymsLegGrp?: ISecLstUpdRelSymsLegGrp[]// [10] LegSymbol.600, LegSymbolSfx.601 .. LegBenchmarkPriceType.680
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [11] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [12] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  Text?: string// [13] 58 (String)
  EncodedTextLen?: number// [14] 354 (Int)
  EncodedText?: Buffer// [15] 355 (RawData)
  RelSymTransactTime?: Date// [16] 1504 (UtcTimestamp)
}
