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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  MDBookType?: number// [3] 1021 (Int)
  MDFeedType?: string// [4] 1022 (String)
  TradeDate?: Date// [5] 75 (LocalDate)
  MDReqID?: string// [6] 262 (String)
  MDIncGrp: IMDIncGrp[]// [7] MDUpdateAction.279, DeleteReason.285 .. MDStreamID.1500
  ApplQueueDepth?: number// [8] 813 (Int)
  ApplQueueResolution?: number// [9] 814 (Int)
  RoutingGrp?: IRoutingGrp[]// [10] RoutingType.216, RoutingID.217
  StandardTrailer: IStandardTrailer// [11] SignatureLength.93, Signature.89, CheckSum.10
}
