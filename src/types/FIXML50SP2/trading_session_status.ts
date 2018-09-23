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
  MDStatisticReqID?: string// 2452
  SideCollateralAmountMarketID?: string// 2692
  SideCollateralAmountMarketSegmentID?: string// 2693
  TradeDate?: Date// 75
  TradingSessionID: string// 336
  TradingSessionSubID?: string// 625
  TradSesMethod?: number// 338
  UnderlyingReturnRateDateMode?: number// 43009
  UnsolicitedIndicator?: string// 325
  MDStatisticStatus: number// 2477
  TradSesEvent?: number// 1368
  FastMarketIndicator?: string// 2447
  TradSesStatusRejReason?: number// 567
  MDStatisticStartTime?: string// 2470
  TradSesOpenTime?: Date// 342
  TradSesPreCloseTime?: Date// 343
  TradSesCloseTime?: Date// 344
  MDStatisticEndTime?: string// 2471
  TradSesControl?: number// 1785
  TotalVolumeTraded?: number// 387
  RelSymTransactTime?: Date// 1504
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  Instrument?: IInstrument
}
