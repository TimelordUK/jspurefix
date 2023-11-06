import { ITradingSessionRules } from './trading_session_rules'

export interface ITrdSessLstGrp {
  TradingSessionID: string// [1] 336 (String)
  TradingSessionSubID?: string// [1] 625 (String)
  TradSesUpdateAction?: string// [1] 1327 (String)
  SecurityExchange?: string// [1] 207 (String)
  MarketID?: string// [1] 1301 (String)
  MarketSegmentID?: string// [1] 1300 (String)
  TradingSessionDesc?: string// [1] 1326 (String)
  TradSesMethod?: number// [1] 338 (Int)
  TradSesMode?: number// [1] 339 (Int)
  UnsolicitedIndicator?: boolean// [1] 325 (Boolean)
  AllocStatus: number// [1] 87 (Int)
  TradSesStatusRejReason?: number// [1] 567 (Int)
  TradSesStartTime?: Date// [1] 341 (UtcTimestamp)
  TradSesOpenTime?: Date// [1] 342 (UtcTimestamp)
  TradSesPreCloseTime?: Date// [1] 343 (UtcTimestamp)
  TradSesCloseTime?: Date// [1] 344 (UtcTimestamp)
  TradSesEndTime?: Date// [1] 345 (UtcTimestamp)
  TotalVolumeTraded?: number// [1] 387 (Float)
  TransactTime?: Date// [1] 60 (UtcTimestamp)
  Text?: string// [1] 58 (String)
  EncodedTextLen?: number// [1] 354 (Length)
  EncodedText?: Buffer// [1] 355 (RawData)
  TradingSessionRules?: ITradingSessionRules// [1] 
}
