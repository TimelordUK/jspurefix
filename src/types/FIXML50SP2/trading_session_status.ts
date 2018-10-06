import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IInstrument } from './set/instrument'

/*
********************************************************
* TradingSessionStatus can be found in Volume 3 of the *
*                                                      *
* specification                                        *
********************************************************
*/
export interface ITradingSessionStatus {
  TradSesReqID?: string// 335
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  TradeDate?: Date// 75
  TradingSessionID: string// 336
  TradingSessionSubID?: string// 625
  TradSesMethod?: number// 338
  TradSesMode?: number// 339
  UnsolicitedIndicator?: boolean// 325
  AllocStatus: number// 87
  TradSesEvent?: number// 1368
  FastMarketIndicator?: boolean// 2447
  TradSesStatusRejReason?: number// 567
  TradSesStartTime?: Date// 341
  TradSesOpenTime?: Date// 342
  TradSesPreCloseTime?: Date// 343
  TradSesCloseTime?: Date// 344
  TradSesEndTime?: Date// 345
  TradSesControl?: number// 1785
  TotalVolumeTraded?: number// 387
  TransactTime?: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  Instrument?: IInstrument
}
