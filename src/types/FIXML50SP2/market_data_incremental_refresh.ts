import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IMDIncGrp } from './set/md_inc_grp'
import { IRoutingGrp } from './set/routing_grp'

/*
****************************************************************
* MarketDataIncrementalRefresh can be found in Volume 3 of the *
*                                                              *
* specification                                                *
****************************************************************
*/
export interface IMarketDataIncrementalRefresh {
  MDBookType?: number// [2] 1021 (Int)
  MDFeedType?: string// [2] 1022 (String)
  MDSubFeedType?: string// [2] 1683 (String)
  TradeDate?: Date// [2] 75 (LocalDate)
  MDReqID?: string// [2] 262 (String)
  MarketID?: string// [2] 1301 (String)
  MarketSegmentID?: string// [2] 1300 (String)
  ApplQueueDepth?: number// [2] 813 (Int)
  ApplQueueResolution?: number// [2] 814 (Int)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  MDIncGrp?: IMDIncGrp[]// [3] UpdtAct.279, DelRsn.285 .. MDEntryFwdPnts.1027
  RoutingGrp?: IRoutingGrp[]// [4] RtgTyp.216, RtgID.217
}
