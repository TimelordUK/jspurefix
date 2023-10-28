import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IMDIncGrp } from './set/md_inc_grp'
import { IRoutingGrp } from './set/routing_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IMarketDataIncrementalRefresh {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  MDBookType?: number// [3] 1021 (Int)
  MDFeedType?: string// [4] 1022 (String)
  MDSubFeedType?: string// [5] 1683 (String)
  TradeDate?: Date// [6] 75 (LocalDate)
  MDReqID?: string// [7] 262 (String)
  MarketID?: string// [8] 1301 (String)
  MarketSegmentID?: string// [9] 1300 (String)
  MDIncGrp?: IMDIncGrp// [10] NoMDEntries.268, MDUpdateAction.279 .. PartySubIDType.803
  ApplQueueDepth?: number// [11] 813 (Int)
  ApplQueueResolution?: number// [12] 814 (Int)
  RoutingGrp?: IRoutingGrp// [13] NoRoutingIDs.215, RoutingType.216, RoutingID.217
  StandardTrailer: IStandardTrailer// [14] SignatureLength.93, Signature.89, CheckSum.10
}
