import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IRelatedInstrumentGrp } from './set/related_instrument_grp'
import { ISecurityClassificationGrp } from './set/security_classification_grp'
import { IStipulations } from './set/stipulations'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { IMarketSegmentGrp } from './set/market_segment_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityDefinition {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  SecurityReportID?: number// [3] 964 (Int)
  ClearingBusinessDate?: Date// [4] 715 (LocalDate)
  SecurityReqID?: string// [5] 320 (String)
  OrderRequestID?: number// [6] 2422 (Int)
  SecurityResponseID?: string// [7] 322 (String)
  SecurityResponseType?: number// [8] 323 (Int)
  SecurityRequestResult?: number// [9] 560 (Int)
  SecurityRejectReason?: number// [10] 1607 (Int)
  CorporateAction?: string// [11] 292 (String)
  Instrument?: IInstrument// [12] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [13] DeliveryForm.668, PctAtRisk.869 .. ReferenceDataDateType.2748
  FinancingDetails?: IFinancingDetails// [14] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [15] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  RelatedInstrumentGrp?: IRelatedInstrumentGrp// [16] NoRelatedInstruments.1647, RelatedInstrumentType.1648 .. RelatedToDividendPeriodXIDRef.2417
  SecurityClassificationGrp?: ISecurityClassificationGrp// [17] NoSecurityClassifications.1582, SecurityClassificationReason.1583, SecurityClassificationValue.1584
  Currency?: string// [18] 15 (String)
  CurrencyCodeSource?: string// [19] 2897 (String)
  PreviousAdjustedOpenInterest?: number// [20] 2572 (Float)
  PreviousUnadjustedOpenInterest?: number// [21] 2573 (Float)
  PriorSettlPrice?: number// [22] 734 (Float)
  Text?: string// [23] 58 (String)
  EncodedTextLen?: number// [24] 354 (Length)
  EncodedText?: Buffer// [25] 355 (RawData)
  Stipulations?: IStipulations// [26] NoStipulations.232, StipulationType.233, StipulationValue.234
  NumOfSimpleInstruments?: number// [27] 1606 (Int)
  NumOfComplexInstruments?: number// [28] 2562 (Int)
  InstrmtLegGrp?: IInstrmtLegGrp// [29] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [30] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [31] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  MarketSegmentGrp?: IMarketSegmentGrp// [32] NoMarketSegments.1310, MarketID.1301 .. MaturityMonthYearIncrement.1229
  LastUpdateTime?: Date// [33] 779 (UtcTimestamp)
  EffectiveBusinessDate?: Date// [34] 2400 (LocalDate)
  TransactTime?: Date// [35] 60 (UtcTimestamp)
  StandardTrailer: IStandardTrailer// [36] SignatureLength.93, Signature.89, CheckSum.10
}
