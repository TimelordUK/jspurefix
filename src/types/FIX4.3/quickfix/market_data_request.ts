import { IStandardHeader } from './set/standard_header'
import { IMarketDataRequestNoMDEntryTypes } from './set/market_data_request_no_md_entry_types'
import { IMarketDataRequestNoRelatedSym } from './set/market_data_request_no_related_sym'
import { IMarketDataRequestNoTradingSessions } from './set/market_data_request_no_trading_sessions'
import { IStandardTrailer } from './set/standard_trailer'

export interface IMarketDataRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  MDReqID: string// [2] 262 (String)
  SubscriptionRequestType: string// [3] 263 (String)
  MarketDepth: number// [4] 264 (Int)
  MDUpdateType?: number// [5] 265 (Int)
  AggregatedBook?: boolean// [6] 266 (Boolean)
  OpenCloseSettleFlag?: string// [7] 286 (String)
  Scope?: string// [8] 546 (String)
  MDImplicitDelete?: boolean// [9] 547 (Boolean)
  NoMDEntryTypes: IMarketDataRequestNoMDEntryTypes[]// [10] MDEntryType.269
  NoRelatedSym: IMarketDataRequestNoRelatedSym[]// [11] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  NoTradingSessions?: IMarketDataRequestNoTradingSessions[]// [12] TradingSessionID.336, TradingSessionSubID.625
  StandardTrailer: IStandardTrailer// [13] SignatureLength.93, Signature.89, CheckSum.10
}
