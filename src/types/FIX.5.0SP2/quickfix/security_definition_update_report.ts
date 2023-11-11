import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IRelatedInstrumentGrp } from './set/related_instrument_grp'
import { IStipulations } from './set/stipulations'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { IMarketSegmentGrp } from './set/market_segment_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityDefinitionUpdateReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  SecurityReportID?: number// [3] 964 (Int)
  SecurityReqID?: string// [4] 320 (String)
  SecurityResponseID?: string// [5] 322 (String)
  SecurityResponseType?: number// [6] 323 (Int)
  ClearingBusinessDate?: Date// [7] 715 (LocalDate)
  SecurityUpdateAction?: string// [8] 980 (String)
  CorporateAction?: string// [9] 292 (String)
  Instrument?: IInstrument// [10] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [11] DeliveryForm.668, PctAtRisk.869 .. ReferenceDataDateType.2748
  FinancingDetails?: IFinancingDetails// [12] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [13] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  RelatedInstrumentGrp?: IRelatedInstrumentGrp// [14] NoRelatedInstruments.1647, RelatedInstrumentType.1648 .. RelatedToDividendPeriodXIDRef.2417
  Currency?: string// [15] 15 (String)
  CurrencyCodeSource?: string// [16] 2897 (String)
  PreviousAdjustedOpenInterest?: number// [17] 2572 (Float)
  PreviousUnadjustedOpenInterest?: number// [18] 2573 (Float)
  PriorSettlPrice?: number// [19] 734 (Float)
  Text?: string// [20] 58 (String)
  EncodedTextLen?: number// [21] 354 (Length)
  EncodedText?: Buffer// [22] 355 (RawData)
  Stipulations?: IStipulations// [23] NoStipulations.232, StipulationType.233, StipulationValue.234
  NumOfSimpleInstruments?: number// [24] 1606 (Int)
  NumOfComplexInstruments?: number// [25] 2562 (Int)
  InstrmtLegGrp?: IInstrmtLegGrp// [26] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [27] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [28] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  MarketSegmentGrp?: IMarketSegmentGrp// [29] NoMarketSegments.1310, MarketID.1301 .. MaturityMonthYearIncrement.1229
  LastUpdateTime?: Date// [30] 779 (UtcTimestamp)
  EffectiveBusinessDate?: Date// [31] 2400 (LocalDate)
  TransactTime?: Date// [32] 60 (UtcTimestamp)
  StandardTrailer: IStandardTrailer// [33] SignatureLength.93, Signature.89, CheckSum.10
}
