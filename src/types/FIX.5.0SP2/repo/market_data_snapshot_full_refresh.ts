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
  StandardHeader: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  TotNumReports?: number// 911
  MDReportID?: number// 963
  ClearingBusinessDate?: Date// 715
  MDBookType?: number// 1021
  MDSubBookType?: number// 1173
  MarketDepth?: number// 264
  MDFeedType?: string// 1022
  RefreshIndicator?: boolean// 1187
  TradeDate?: Date// 75
  MDReqID?: string// 262
  Instrument: IInstrument
  UndInstrmtGrp?: IUndInstrmtGrp
  InstrmtLegGrp?: IInstrmtLegGrp
  FinancialStatus?: string// 291
  CorporateAction?: string// 292
  NetChgPrevDay?: number// 451
  MDFullGrp: IMDFullGrp[]
  ApplQueueDepth?: number// 813
  ApplQueueResolution?: number// 814
  RoutingGrp?: IRoutingGrp[]
  StandardTrailer: IStandardTrailer
  MDStreamID?: string// 1500
}
