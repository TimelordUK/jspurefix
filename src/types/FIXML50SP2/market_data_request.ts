import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IMDReqGrp } from './set/md_req_grp'
import { IMarketSegmentScopeGrp } from './set/market_segment_scope_grp'
import { IInstrmtMDReqGrp } from './set/instrmt_md_req_grp'
import { ITrdgSesGrp } from './set/trdg_ses_grp'

/*
*****************************************************
* MarketDataRequest can be found in Volume 3 of the *
*                                                   *
* specification                                     *
*****************************************************
*/
export interface IMarketDataRequest {
  MDReqID: string// [2] 262 (String)
  SubscriptionRequestType: string// [2] 263 (String)
  MarketDepth: number// [2] 264 (Int)
  MDUpdateType?: number// [2] 265 (Int)
  AggregatedBook?: boolean// [2] 266 (Boolean)
  OpenCloseSettlFlag?: string// [2] 286 (String)
  Scope?: string// [2] 546 (String)
  MDImplicitDelete?: boolean// [2] 547 (Boolean)
  ApplQueueAction?: number// [2] 815 (Int)
  ApplQueueMax?: number// [2] 812 (Int)
  MDQuoteType?: number// [2] 1070 (Int)
  FastMarketIndicator?: boolean// [2] 2447 (Boolean)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Parties?: IParties[]// [2] ID.448, Src.447 .. Qual.2376
  MDReqGrp?: IMDReqGrp[]// [3] Typ.269
  MarketSegmentScopeGrp?: IMarketSegmentScopeGrp[]// [4] MktID.1301, MktSegID.1300
  InstrmtMDReqGrp?: IInstrmtMDReqGrp[]// [5] Ccy.15, Typ.537 .. MDStrmID.1500
  TrdgSesGrp?: ITrdgSesGrp[]// [6] SesID.336, SesSub.625
}
