import { IInstrument } from './instrument'
import { IInstrumentExtension } from './instrument_extension'
import { ISecurityClassificationGrp } from './security_classification_grp'
import { IFinancingDetails } from './financing_details'
import { ISecurityTradingRules } from './security_trading_rules'
import { IStrikeRules } from './strike_rules'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IStipulations } from './stipulations'
import { IInstrmtLegSecListGrp } from './instrmt_leg_sec_list_grp'
import { IRelatedInstrumentGrp } from './related_instrument_grp'
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data'
import { IYieldData } from './yield_data'
import { IPriceMovementGrp } from './price_movement_grp'

export interface ISecListGrpNoRelatedSym {
  Instrument?: IInstrument// [1] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [2] DeliveryForm.668, PctAtRisk.869 .. ReferenceDataDateType.2748
  SecurityClassificationGrp?: ISecurityClassificationGrp// [3] NoSecurityClassifications.1582, SecurityClassificationReason.1583, SecurityClassificationValue.1584
  FinancingDetails?: IFinancingDetails// [4] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  SecurityTradingRules?: ISecurityTradingRules// [5] BaseTradingRules.1205, StartTickPriceRange.1206 .. NestedInstrAttribValue.1211
  StrikeRules?: IStrikeRules// [6] NoStrikeRules.1201, StrikeRuleID.1223 .. MaturityMonthYearIncrement.1229
  UndInstrmtGrp?: IUndInstrmtGrp// [7] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  Currency?: string// [8] 15 (String)
  CurrencyCodeSource?: string// [9] 2897 (String)
  Stipulations?: IStipulations// [10] NoStipulations.232, StipulationType.233, StipulationValue.234
  InstrmtLegSecListGrp?: IInstrmtLegSecListGrp// [11] NoLegs.555, LegSymbol.600 .. LegBenchmarkPriceType.680
  RelatedInstrumentGrp?: IRelatedInstrumentGrp// [12] NoRelatedInstruments.1647, RelatedInstrumentType.1648 .. RelatedToDividendPeriodXIDRef.2417
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [13] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [14] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  PriceMovementGrp?: IPriceMovementGrp// [15] NoPriceMovements.1919, NoPriceMovements.1920 .. ClearingAccountType.1816
  RelSymTransactTime?: Date// [16] 1504 (UtcTimestamp)
  NumOfSimpleInstruments?: number// [17] 1606 (Int)
  Text?: string// [18] 58 (String)
  EncodedTextLen?: number// [19] 354 (Length)
  EncodedText?: Buffer// [20] 355 (RawData)
}
