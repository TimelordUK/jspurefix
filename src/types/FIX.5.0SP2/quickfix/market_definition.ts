import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IBaseTradingRules } from './set/base_trading_rules'
import { IOrdTypeRules } from './set/ord_type_rules'
import { ITimeInForceRules } from './set/time_in_force_rules'
import { IExecInstRules } from './set/exec_inst_rules'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The Market Definition message is used to respond to Market *
* Definition Request. In a subscription, it will be used to  *
* provide the initial snapshot of the information requested. *
* Subsequent updates are provided by the Market Definition   *
* Update Report.                                             *
**************************************************************
*/
export interface IMarketDefinition {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  MarketReportID: string// [3] 1394 (String)
  MarketReqID?: string// [4] 1393 (String)
  MarketID: string// [5] 1301 (String)
  MarketSegmentID?: string// [6] 1300 (String)
  MarketSegmentDesc?: string// [7] 1396 (String)
  EncodedMktSegmDescLen?: number// [8] 1397 (Int)
  EncodedMktSegmDesc?: Buffer// [9] 1398 (RawData)
  ParentMktSegmID?: string// [10] 1325 (String)
  Currency?: string// [11] 15 (String)
  BaseTradingRules?: IBaseTradingRules// [12] TickRules.1205, StartTickPriceRange.1206 .. PriceType.423
  OrdTypeRules?: IOrdTypeRules[]// [13] OrdType.40
  TimeInForceRules?: ITimeInForceRules[]// [14] TimeInForce.59
  ExecInstRules?: IExecInstRules[]// [15] ExecInstValue.1308
  TransactTime?: Date// [16] 60 (UtcTimestamp)
  Text?: string// [17] 58 (String)
  EncodedTextLen?: number// [18] 354 (Int)
  EncodedText?: Buffer// [19] 355 (RawData)
  StandardTrailer: IStandardTrailer// [20] SignatureLength.93, Signature.89, CheckSum.10
}
