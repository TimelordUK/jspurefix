import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IMDReqGrp } from './set/md_req_grp'
import { IMarketSegmentScopeGrp } from './set/market_segment_scope_grp'
import { IInstrmtMDReqGrp } from './set/instrmt_md_req_grp'
import { ITrdgSesGrp } from './set/trdg_ses_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IMarketDataRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  MDReqID: string// [2] 262 (String)
  SubscriptionRequestType: string// [3] 263 (String)
  Parties?: IParties// [4] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  MarketDepth: number// [5] 264 (Int)
  MDUpdateType?: number// [6] 265 (Int)
  AggregatedBook?: boolean// [7] 266 (Boolean)
  OpenCloseSettlFlag?: string// [8] 286 (String)
  Scope?: string// [9] 546 (String)
  MDImplicitDelete?: boolean// [10] 547 (Boolean)
  MDReqGrp?: IMDReqGrp// [11] NoMDEntryTypes.267, MDEntryType.269
  MarketSegmentScopeGrp?: IMarketSegmentScopeGrp// [12] NoMarketSegments.1310, MarketID.1301, MarketSegmentID.1300
  InstrmtMDReqGrp?: IInstrmtMDReqGrp// [13] NoRelatedSym.146, Symbol.55 .. MDStreamID.1500
  TrdgSesGrp?: ITrdgSesGrp// [14] NoTradingSessions.386, TradingSessionID.336, TradingSessionSubID.625
  ApplQueueAction?: number// [15] 815 (Int)
  ApplQueueMax?: number// [16] 812 (Int)
  MDQuoteType?: number// [17] 1070 (Int)
  FastMarketIndicator?: boolean// [18] 2447 (Boolean)
  StandardTrailer: IStandardTrailer// [19] SignatureLength.93, Signature.89, CheckSum.10
}
