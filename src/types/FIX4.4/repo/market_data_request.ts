import { IStandardHeader } from './set/standard_header'
import { IMDReqGrp } from './set/md_req_grp'
import { IInstrmtMDReqGrp } from './set/instrmt_md_req_grp'
import { ITrdgSesGrp } from './set/trdg_ses_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
************************************************************
* Some systems allow the transmission of real-time quote,  *
* order, trade, trade volume, open interest, and/or other  *
* price information on a subscription basis. A Market Data *
* Request is a general request for market data on specific *
* securities or forex quotes.                              *
************************************************************
*/
export interface IMarketDataRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  MDReqID: string// [2] 262 (String)
  SubscriptionRequestType: string// [3] 263 (String)
  MarketDepth: number// [4] 264 (Int)
  MDUpdateType?: number// [5] 265 (Int)
  AggregatedBook?: boolean// [6] 266 (Boolean)
  OpenCloseSettlFlag?: string// [7] 286 (String)
  Scope?: string// [8] 546 (String)
  MDImplicitDelete?: boolean// [9] 547 (Boolean)
  MDReqGrp: IMDReqGrp[]// [10] MDEntryType.269
  InstrmtMDReqGrp: IInstrmtMDReqGrp[]// [11] Symbol.55, SymbolSfx.65 .. LegInterestAccrualDate.956
  TrdgSesGrp?: ITrdgSesGrp[]// [12] TradingSessionID.336, TradingSessionSubID.625
  ApplQueueAction?: number// [13] 815 (Int)
  ApplQueueMax?: number// [14] 812 (Int)
  StandardTrailer: IStandardTrailer// [15] SignatureLength.93, Signature.89, CheckSum.10
}
