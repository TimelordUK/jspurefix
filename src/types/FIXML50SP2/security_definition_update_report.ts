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

/*
**************************************************************
* SecurityDefinitionUpdateReport can be found in Volume 3 of *
* the                                                        *
*                                                            *
* specification                                              *
**************************************************************
*/
export interface ISecurityDefinitionUpdateReport {
  SecurityReportID?: number// 964
  SecurityReqID?: string// 320
  SecurityResponseID?: string// 322
  SecurityResponseType?: number// 323
  ClearingBusinessDate?: Date// 715
  SecurityUpdateAction?: string// 980
  CorporateAction?: string// 292
  Currency?: string// 15
  PreviousAdjustedOpenInterest?: number// 2572
  PreviousUnadjustedOpenInterest?: number// 2573
  PriorSettlPrice?: number// 734
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  NumOfSimpleInstruments?: number// 1606
  NumOfComplexInstruments?: number// 2562
  LastUpdateTime?: Date// 779
  EffectiveBusinessDate?: Date// 2400
  TransactTime?: Date// 60
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp[]
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]
  Stipulations?: IStipulations[]
  InstrmtLegGrp?: IInstrmtLegGrp[]
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  YieldData?: IYieldData
  MarketSegmentGrp?: IMarketSegmentGrp[]
}
