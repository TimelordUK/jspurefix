import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IBaseTradingRules } from './set/base_trading_rules'
import { IOrdTypeRules } from './set/ord_type_rules'
import { ITimeInForceRules } from './set/time_in_force_rules'
import { IExecInstRules } from './set/exec_inst_rules'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* In a subscription for market structure information, this     *
* message is used once the initial snapshot of the information *
* has been sent using the Market Definition message.           *
****************************************************************
*/
export interface IMarketDefinitionUpdateReport {
  StandardHeader: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  MarketReportID: string// 1394
  MarketReqID?: string// 1393
  MarketUpdateAction?: string// 1395
  MarketID: string// 1301
  MarketSegmentID?: string// 1300
  MarketSegmentDesc?: string// 1396
  EncodedMktSegmDescLen?: number// 1397
  EncodedMktSegmDesc?: Buffer// 1398
  ParentMktSegmID?: string// 1325
  Currency?: string// 15
  BaseTradingRules?: IBaseTradingRules
  OrdTypeRules?: IOrdTypeRules[]
  TimeInForceRules?: ITimeInForceRules[]
  ExecInstRules?: IExecInstRules[]
  TransactTime?: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
