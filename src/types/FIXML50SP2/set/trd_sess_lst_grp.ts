import { ITradingSessionRules } from './trading_session_rules'

export interface ITrdSessLstGrp {
  TradingSessionID: string// 336
  TradingSessionSubID?: string// 625
  TradSesUpdateAction?: string// 1327
  SecurityExchange?: string// 207
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  TradingSessionDesc?: string// 1326
  TradSesMethod?: number// 338
  TradSesMode?: number// 339
  UnsolicitedIndicator?: boolean// 325
  AllocStatus: number// 87
  TradSesStatusRejReason?: number// 567
  TradSesStartTime?: Date// 341
  TradSesOpenTime?: Date// 342
  TradSesPreCloseTime?: Date// 343
  TradSesCloseTime?: Date// 344
  TradSesEndTime?: Date// 345
  TotalVolumeTraded?: number// 387
  TransactTime?: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  TradingSessionRules?: ITradingSessionRules
}
