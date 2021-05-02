import { IStandardHeader } from './set/standard_header'
import { IMDReqGrp } from './set/md_req_grp'
import { IInstrmtMDReqGrp } from './set/instrmt_md_req_grp'
import { ITrdgSesGrp } from './set/trdg_ses_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IMarketDataRequest {
  StandardHeader: IStandardHeader
  MDReqID: string// 262
  SubscriptionRequestType: string// 263
  MarketDepth: number// 264
  MDUpdateType?: number// 265
  AggregatedBook?: boolean// 266
  OpenCloseSettlFlag?: string// 286
  Scope?: string// 546
  MDImplicitDelete?: boolean// 547
  MDReqGrp?: IMDReqGrp
  InstrmtMDReqGrp?: IInstrmtMDReqGrp
  TrdgSesGrp?: ITrdgSesGrp
  ApplQueueAction?: number// 815
  ApplQueueMax?: number// 812
  StandardTrailer: IStandardTrailer
}
