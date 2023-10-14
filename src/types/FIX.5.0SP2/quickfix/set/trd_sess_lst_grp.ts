import { ITradingSessionRules } from './trading_session_rules'

export interface ITrdSessLstGrp {
  TradingSessionID: string// [1] 336 (String)
  TradingSessionSubID?: string// [2] 625 (String)
  SecurityExchange?: string// [3] 207 (String)
  MarketID?: string// [4] 1301 (String)
  MarketSegmentID?: string// [5] 1300 (String)
  TradingSessionDesc?: string// [6] 1326 (String)
  TradSesMethod?: number// [7] 338 (Int)
  TradSesMode?: number// [8] 339 (Int)
  UnsolicitedIndicator?: boolean// [9] 325 (Boolean)
  TradSesStatus: number// [10] 340 (Int)
  TradSesStatusRejReason?: number// [11] 567 (Int)
  TradSesStartTime?: Date// [12] 341 (UtcTimestamp)
  TradSesOpenTime?: Date// [13] 342 (UtcTimestamp)
  TradSesPreCloseTime?: Date// [14] 343 (UtcTimestamp)
  TradSesCloseTime?: Date// [15] 344 (UtcTimestamp)
  TradSesEndTime?: Date// [16] 345 (UtcTimestamp)
  TotalVolumeTraded?: number// [17] 387 (Float)
  TradingSessionRules?: ITradingSessionRules// [18] OrdTypeRules.1237, OrdType.40 .. MDBookType.1021
  Text?: string// [19] 58 (String)
  EncodedTextLen?: number// [20] 354 (Int)
  EncodedText?: Buffer// [21] 355 (RawData)
  TransactTime?: Date// [22] 60 (UtcTimestamp)
  TradSesUpdateAction?: string// [23] 1327 (String)
}
