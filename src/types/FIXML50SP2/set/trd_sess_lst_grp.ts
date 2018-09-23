import { ITradingSessionRules } from './trading_session_rules'

export interface ITrdSessLstGrp {
  TradingSessionID: string// 336
  TradingSessionSubID?: string// 625
  TradSesUpdateAction?: string// 1327
  UnderlyingStreamCommodityExchange?: string// 41973
  SideCollateralAmountMarketID?: string// 2692
  SideCollateralAmountMarketSegmentID?: string// 2693
  TradingSessionDesc?: string// 1326
  TradSesMethod?: number// 338
  UnderlyingReturnRateDateMode?: number// 43009
  UnsolicitedIndicator?: string// 325
  MDStatisticStatus: number// 2477
  TradSesStatusRejReason?: number// 567
  MDStatisticStartTime?: string// 2470
  TradSesOpenTime?: Date// 342
  TradSesPreCloseTime?: Date// 343
  TradSesCloseTime?: Date// 344
  MDStatisticEndTime?: string// 2471
  TotalVolumeTraded?: number// 387
  RelSymTransactTime?: Date// 1504
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  TradingSessionRules?: ITradingSessionRules
}
