import { Iheader } from './set/header'
import { Itrailer } from './set/trailer'

export interface ITradingSessionStatusRequest {
  header: Iheader
  TradSesReqID: string// 335
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  TradSesMethod?: number// 338
  TradSesMode?: number// 339
  SubscriptionRequestType: string// 263
  trailer: Itrailer
}
