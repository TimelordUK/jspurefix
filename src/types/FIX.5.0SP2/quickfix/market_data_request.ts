import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
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
  Parties?: IParties[]// [4] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  MarketDepth: number// [5] 264 (Int)
  MDUpdateType?: number// [6] 265 (Int)
  AggregatedBook?: boolean// [7] 266 (Boolean)
  OpenCloseSettlFlag?: string// [8] 286 (String)
  Scope?: string// [9] 546 (String)
  MDImplicitDelete?: boolean// [10] 547 (Boolean)
  MDReqGrp: IMDReqGrp[]// [11] MDEntryType.269
  InstrmtMDReqGrp: IInstrmtMDReqGrp[]// [12] Symbol.55, SymbolSfx.65 .. MDStreamID.1500
  TrdgSesGrp?: ITrdgSesGrp[]// [13] TradingSessionID.336, TradingSessionSubID.625
  ApplQueueAction?: number// [14] 815 (Int)
  ApplQueueMax?: number// [15] 812 (Int)
  MDQuoteType?: number// [16] 1070 (Int)
  StandardTrailer: IStandardTrailer// [17] SignatureLength.93, Signature.89, CheckSum.10
}
