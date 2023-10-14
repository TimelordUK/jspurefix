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
**************************************************************
* The Security Definition message is used for the following: *
* 1. Accept the security defined in a Security Definition    *
* message.                                                   *
* 2. Accept the security defined in a Security Definition    *
* message with changes to the definition and/or identity of  *
* the security.                                              *
* 3. Reject the security requested in a Security Definition  *
* message.                                                   *
* 4. Respond to a request for securities within a specified  *
* market segment.                                            *
* 5. Convey comprehensive security definition for all market *
* segments that the security participates in.                *
* 6. Convey the security's trading rules that differ from    *
* default rules for the market segment.                      *
**************************************************************
*/
export interface ISecurityDefinition {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  SecurityReportID?: number// [3] 964 (Int)
  ClearingBusinessDate?: Date// [4] 715 (LocalDate)
  SecurityReqID?: string// [5] 320 (String)
  SecurityResponseID?: string// [6] 322 (String)
  SecurityResponseType?: number// [7] 323 (Int)
  CorporateAction?: string// [8] 292 (String)
  Instrument?: IInstrument// [9] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  InstrumentExtension?: IInstrumentExtension// [10] DeliveryForm.668, PctAtRisk.869 .. InstrAttribValue.872
  UndInstrmtGrp?: IUndInstrmtGrp// [11] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  Currency?: string// [12] 15 (String)
  Text?: string// [13] 58 (String)
  EncodedTextLen?: number// [14] 354 (Int)
  EncodedText?: Buffer// [15] 355 (RawData)
  Stipulations?: IStipulations[]// [16] StipulationType.233, StipulationValue.234
  InstrmtLegGrp?: IInstrmtLegGrp// [17] NoLegs.555, LegSymbol.600 .. LegFlowScheduleType.1440
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [18] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [19] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  MarketSegmentGrp?: IMarketSegmentGrp[]// [20] MarketID.1301, MarketSegmentID.1300 .. MaturityMonthYearIncrement.1229
  StandardTrailer: IStandardTrailer// [21] SignatureLength.93, Signature.89, CheckSum.10
  TransactTime?: Date// [22] 60 (UtcTimestamp)
}
