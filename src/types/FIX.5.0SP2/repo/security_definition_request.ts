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
  StandardHeader: IStandardHeader
  SecurityReqID: string// 320
  SecurityRequestType: number// 321
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  UndInstrmtGrp?: IUndInstrmtGrp
  Currency?: string// 15
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  Stipulations?: IStipulations[]
  InstrmtLegGrp?: IInstrmtLegGrp
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  YieldData?: IYieldData
  ExpirationCycle?: number// 827
  SubscriptionRequestType?: string// 263
  StandardTrailer: IStandardTrailer
}
