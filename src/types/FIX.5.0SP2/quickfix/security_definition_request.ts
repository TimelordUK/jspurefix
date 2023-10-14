import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IStipulations } from './set/stipulations'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The Security Definition Request message is used for the     *
* following:                                                  *
* 1. Request a specific Security to be traded with the second *
* party. The request security can be defined as a multileg    *
* security made up of one or more instrument legs.            *
* 2. Request a set of individual securities for a single      *
* market segment.                                             *
* 3. Request all securities, independent of market segment.   *
***************************************************************
*/
export interface ISecurityDefinitionRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  SecurityReqID: string// [2] 320 (String)
  SecurityRequestType: number// [3] 321 (Int)
  MarketID?: string// [4] 1301 (String)
  MarketSegmentID?: string// [5] 1300 (String)
  Instrument?: IInstrument// [6] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  InstrumentExtension?: IInstrumentExtension// [7] DeliveryForm.668, PctAtRisk.869 .. InstrAttribValue.872
  UndInstrmtGrp?: IUndInstrmtGrp// [8] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  Currency?: string// [9] 15 (String)
  Text?: string// [10] 58 (String)
  EncodedTextLen?: number// [11] 354 (Int)
  EncodedText?: Buffer// [12] 355 (RawData)
  TradingSessionID?: string// [13] 336 (String)
  TradingSessionSubID?: string// [14] 625 (String)
  Stipulations?: IStipulations[]// [15] StipulationType.233, StipulationValue.234
  InstrmtLegGrp?: IInstrmtLegGrp// [16] NoLegs.555, LegSymbol.600 .. LegFlowScheduleType.1440
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [17] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [18] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  ExpirationCycle?: number// [19] 827 (Int)
  SubscriptionRequestType?: string// [20] 263 (String)
  StandardTrailer: IStandardTrailer// [21] SignatureLength.93, Signature.89, CheckSum.10
}
