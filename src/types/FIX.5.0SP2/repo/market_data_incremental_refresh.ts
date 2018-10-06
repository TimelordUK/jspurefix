import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IMDIncGrp } from './set/md_inc_grp'
import { IRoutingGrp } from './set/routing_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The Market Data message for incremental updates may contain *
* any combination of new, changed, or deleted Market Data     *
* Entries, for any combination of instruments, with any       *
* combination of trades, imbalances, quotes, index values,    *
* open, close, settlement, high, low, and VWAP prices, trade  *
* volume and open interest so long as the maximum FIX message *
* size is not exceeded. All of these types of Market Data     *
* Entries can be changed and deleted.                         *
***************************************************************
*/
export interface IMarketDataIncrementalRefresh {
  StandardHeader: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  MDBookType?: number// 1021
  MDFeedType?: string// 1022
  TradeDate?: Date// 75
  MDReqID?: string// 262
  MDIncGrp: IMDIncGrp[]
  ApplQueueDepth?: number// 813
  ApplQueueResolution?: number// 814
  RoutingGrp?: IRoutingGrp[]
  StandardTrailer: IStandardTrailer
}
