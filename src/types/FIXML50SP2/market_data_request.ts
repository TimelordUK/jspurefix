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
  MDReqID: string// 262
  SubscriptionRequestType: string// 263
  MarketDepth: number// 264
  MDUpdateType?: number// 265
  AggregatedBook?: boolean// 266
  DerivativeSettleOnOpenFlag?: string// 1254
  MDStatisticScope?: number// 2457
  MDImplicitDelete?: boolean// 547
  ApplQueueAction?: number// 815
  ApplQueueMax?: number// 812
  MDQuoteType?: number// 1070
  FastMarketIndicator?: boolean// 2447
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  MDReqGrp?: IMDReqGrp[]
  MarketSegmentScopeGrp?: IMarketSegmentScopeGrp[]
  InstrmtMDReqGrp?: IInstrmtMDReqGrp[]
  TrdgSesGrp?: ITrdgSesGrp[]
}
