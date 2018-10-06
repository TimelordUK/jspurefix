import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Trading Session Status provides information on the       *
* status of a market. For markets multiple trading sessions on *
* multiple-markets occurring (morning and evening sessions for *
* instance), this message is able to provide information on    *
* what products are trading on what market during what trading *
* session.                                                     *
****************************************************************
*/
export interface ITradingSessionStatus {
  StandardHeader: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  TradSesReqID?: string// 335
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  TradingSessionID: string// 336
  TradingSessionSubID?: string// 625
  TradSesMethod?: number// 338
  TradSesMode?: number// 339
  UnsolicitedIndicator?: boolean// 325
  TradSesStatus: number// 340
  TradSesEvent?: number// 1368
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
  Instrument?: IInstrument
  StandardTrailer: IStandardTrailer
}
