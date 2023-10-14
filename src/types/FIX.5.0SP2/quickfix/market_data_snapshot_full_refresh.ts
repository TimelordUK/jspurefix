import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IMDFullGrp } from './set/md_full_grp'
import { IRoutingGrp } from './set/routing_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Market Data messages are used as the response to a       *
* Market Data Request message. In all cases, one Market Data   *
* message refers only to one Market Data Request. It can be    *
* used to transmit a 2-sided book of orders or list of quotes, *
* a list of trades, index values, opening, closing,            *
* settlement, high, low, or VWAP prices, the trade volume or   *
* open interest for a security, or any combination of these.   *
****************************************************************
*/
export interface IMarketDataSnapshotFullRefresh {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  TotNumReports?: number// [3] 911 (Int)
  MDReportID?: number// [4] 963 (Int)
  ClearingBusinessDate?: Date// [5] 715 (LocalDate)
  MDBookType?: number// [6] 1021 (Int)
  MDSubBookType?: number// [7] 1173 (Int)
  MarketDepth?: number// [8] 264 (Int)
  MDFeedType?: string// [9] 1022 (String)
  RefreshIndicator?: boolean// [10] 1187 (Boolean)
  TradeDate?: Date// [11] 75 (LocalDate)
  MDReqID?: string// [12] 262 (String)
  Instrument: IInstrument// [13] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  UndInstrmtGrp?: IUndInstrmtGrp// [14] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  InstrmtLegGrp?: IInstrmtLegGrp// [15] NoLegs.555, LegSymbol.600 .. LegFlowScheduleType.1440
  FinancialStatus?: string// [16] 291 (String)
  CorporateAction?: string// [17] 292 (String)
  NetChgPrevDay?: number// [18] 451 (Float)
  MDFullGrp: IMDFullGrp[]// [19] MDEntryType.269, MDEntryID.278 .. LastPx.31
  ApplQueueDepth?: number// [20] 813 (Int)
  ApplQueueResolution?: number// [21] 814 (Int)
  RoutingGrp?: IRoutingGrp[]// [22] RoutingType.216, RoutingID.217
  StandardTrailer: IStandardTrailer// [23] SignatureLength.93, Signature.89, CheckSum.10
  MDStreamID?: string// [24] 1500 (String)
}
