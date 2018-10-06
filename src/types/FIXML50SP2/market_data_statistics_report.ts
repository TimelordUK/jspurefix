import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IRelatedInstrumentGrp } from './set/related_instrument_grp'
import { IMDStatisticRptGrp } from './set/md_statistic_rpt_grp'

/*
**************************************************************
* MarketDataStatisticsReport can be found in Volume 3 of the *
*                                                            *
* specification                                              *
**************************************************************
*/
export interface IMarketDataStatisticsReport {
  MDStatisticRptID: string// 2453
  MDStatisticReqID?: string// 2452
  SecurityRequestResult?: number// 560
  UnsolicitedIndicator?: boolean// 325
  TradeDate?: Date// 75
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  MarketSegmentDesc?: string// 1396
  EncodedMktSegmDescLen?: number// 1397
  EncodedMktSegmDesc?: Buffer// 1398
  SecurityListID?: string// 1465
  TransactTime?: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  Parties?: IParties[]
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp[]
  InstrmtLegGrp?: IInstrmtLegGrp[]
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]
  MDStatisticRptGrp?: IMDStatisticRptGrp[]
}
