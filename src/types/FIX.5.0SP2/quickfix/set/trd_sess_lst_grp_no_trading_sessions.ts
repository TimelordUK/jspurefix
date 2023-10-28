import { ITradingSessionRules } from './trading_session_rules'

export interface ITrdSessLstGrpNoTradingSessions {
  TradingSessionID: string// [1] 336 (String)
  TradingSessionSubID?: string// [2] 625 (String)
  TradSesUpdateAction?: string// [3] 1327 (String)
  SecurityExchange?: string// [4] 207 (String)
  MarketID?: string// [5] 1301 (String)
  MarketSegmentID?: string// [6] 1300 (String)
  TradingSessionDesc?: string// [7] 1326 (String)
  TradSesMethod?: number// [8] 338 (Int)
  TradSesMode?: number// [9] 339 (Int)
  UnsolicitedIndicator?: boolean// [10] 325 (Boolean)
  TradSesStatus: number// [11] 340 (Int)
  TradSesStatusRejReason?: number// [12] 567 (Int)
  TradSesStartTime?: Date// [13] 341 (UtcTimestamp)
  TradSesOpenTime?: Date// [14] 342 (UtcTimestamp)
  TradSesPreCloseTime?: Date// [15] 343 (UtcTimestamp)
  TradSesCloseTime?: Date// [16] 344 (UtcTimestamp)
  TradSesEndTime?: Date// [17] 345 (UtcTimestamp)
  TotalVolumeTraded?: number// [18] 387 (Float)
  TradingSessionRules?: ITradingSessionRules// [19] OrdTypeRules.1237, OrdType.40 .. SecondaryServiceLocationID.2568
  TransactTime?: Date// [20] 60 (UtcTimestamp)
  Text?: string// [21] 58 (String)
  EncodedTextLen?: number// [22] 354 (Length)
  EncodedText?: Buffer// [23] 355 (RawData)
}
