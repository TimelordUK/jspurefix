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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  MarketReportID: string// [3] 1394 (String)
  MarketReqID?: string// [4] 1393 (String)
  MarketUpdateAction?: string// [5] 1395 (String)
  MarketID: string// [6] 1301 (String)
  MarketSegmentID?: string// [7] 1300 (String)
  MarketSegmentDesc?: string// [8] 1396 (String)
  EncodedMktSegmDescLen?: number// [9] 1397 (Int)
  EncodedMktSegmDesc?: Buffer// [10] 1398 (RawData)
  ParentMktSegmID?: string// [11] 1325 (String)
  Currency?: string// [12] 15 (String)
  BaseTradingRules?: IBaseTradingRules// [13] TickRules.1205, StartTickPriceRange.1206 .. PriceType.423
  OrdTypeRules?: IOrdTypeRules[]// [14] OrdType.40
  TimeInForceRules?: ITimeInForceRules[]// [15] TimeInForce.59
  ExecInstRules?: IExecInstRules[]// [16] ExecInstValue.1308
  TransactTime?: Date// [17] 60 (UtcTimestamp)
  Text?: string// [18] 58 (String)
  EncodedTextLen?: number// [19] 354 (Int)
  EncodedText?: Buffer// [20] 355 (RawData)
  StandardTrailer: IStandardTrailer// [21] SignatureLength.93, Signature.89, CheckSum.10
}
