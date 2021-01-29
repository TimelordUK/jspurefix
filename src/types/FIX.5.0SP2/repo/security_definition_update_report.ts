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
  StandardHeader: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  SecurityReportID?: number// 964
  SecurityReqID?: string// 320
  SecurityResponseID?: string// 322
  SecurityResponseType?: number// 323
  ClearingBusinessDate?: Date// 715
  SecurityUpdateAction?: string// 980
  CorporateAction?: string// 292
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  UndInstrmtGrp?: IUndInstrmtGrp
  Currency?: string// 15
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  Stipulations?: IStipulations[]
  InstrmtLegGrp?: IInstrmtLegGrp
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  YieldData?: IYieldData
  MarketSegmentGrp?: IMarketSegmentGrp[]
  StandardTrailer: IStandardTrailer
  TransactTime?: Date// 60
}
