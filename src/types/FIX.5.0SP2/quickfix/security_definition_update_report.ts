import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IStipulations } from './set/stipulations'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { IMarketSegmentGrp } from './set/market_segment_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
***********************************************************
* This message is used for reporting updates to a Product *
* Security Masterfile. Updates could be the result of     *
* corporate actions or other business events. Updates may *
* include additions, modifications or deletions.          *
***********************************************************
*/
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
  Instrument?: IInstrument// [10] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  InstrumentExtension?: IInstrumentExtension// [11] DeliveryForm.668, PctAtRisk.869 .. InstrAttribValue.872
  UndInstrmtGrp?: IUndInstrmtGrp// [12] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  Currency?: string// [13] 15 (String)
  Text?: string// [14] 58 (String)
  EncodedTextLen?: number// [15] 354 (Int)
  EncodedText?: Buffer// [16] 355 (RawData)
  Stipulations?: IStipulations[]// [17] StipulationType.233, StipulationValue.234
  InstrmtLegGrp?: IInstrmtLegGrp// [18] NoLegs.555, LegSymbol.600 .. LegFlowScheduleType.1440
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [19] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [20] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  MarketSegmentGrp?: IMarketSegmentGrp[]// [21] MarketID.1301, MarketSegmentID.1300 .. MaturityMonthYearIncrement.1229
  StandardTrailer: IStandardTrailer// [22] SignatureLength.93, Signature.89, CheckSum.10
  TransactTime?: Date// [23] 60 (UtcTimestamp)
}
