import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface ITradingSessionStatusRequest {
  StandardHeader: IStandardHeader
  TradSesReqID: string// 335
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  TradSesMethod?: number// 338
  TradSesMode?: number// 339
  SubscriptionRequestType: string// 263
  StandardTrailer: IStandardTrailer
}
