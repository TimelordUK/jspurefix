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
  TradSesReqID?: string// [2] 335 (String)
  MarketID?: string// [2] 1301 (String)
  MarketSegmentID?: string// [2] 1300 (String)
  TradeDate?: Date// [2] 75 (LocalDate)
  TradingSessionID: string// [2] 336 (String)
  TradingSessionSubID?: string// [2] 625 (String)
  TradSesMethod?: number// [2] 338 (Int)
  TradSesMode?: number// [2] 339 (Int)
  UnsolicitedIndicator?: boolean// [2] 325 (Boolean)
  AllocStatus: number// [2] 87 (Int)
  TradSesEvent?: number// [2] 1368 (Int)
  FastMarketIndicator?: boolean// [2] 2447 (Boolean)
  TradSesStatusRejReason?: number// [2] 567 (Int)
  TradSesStartTime?: Date// [2] 341 (UtcTimestamp)
  TradSesOpenTime?: Date// [2] 342 (UtcTimestamp)
  TradSesPreCloseTime?: Date// [2] 343 (UtcTimestamp)
  TradSesCloseTime?: Date// [2] 344 (UtcTimestamp)
  TradSesEndTime?: Date// [2] 345 (UtcTimestamp)
  TradSesControl?: number// [2] 1785 (Int)
  TotalVolumeTraded?: number// [2] 387 (Float)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  Instrument?: IInstrument// [3] Sym.55, Sfx.65 .. ExchLookAlike.2603
}
