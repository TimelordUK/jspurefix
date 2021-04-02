import { Iheader } from './set/header'
import { Itrailer } from './set/trailer'

export interface ITradingSessionStatus {
  header: Iheader
  TradSesReqID?: string// 335
  TradingSessionID: string// 336
  TradingSessionSubID?: string// 625
  TradSesMethod?: number// 338
  TradSesMode?: number// 339
  UnsolicitedIndicator?: boolean// 325
  TradSesStatus: number// 340
  TradSesStatusRejReason?: number// 567
  TradSesStartTime?: Date// 341
  TradSesOpenTime?: Date// 342
  TradSesPreCloseTime?: Date// 343
  TradSesCloseTime?: Date// 344
  TradSesEndTime?: Date// 345
  TotalVolumeTraded?: number// 387
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  trailer: Itrailer
}
