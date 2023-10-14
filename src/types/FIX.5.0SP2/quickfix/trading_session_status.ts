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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  TradSesReqID?: string// [3] 335 (String)
  MarketID?: string// [4] 1301 (String)
  MarketSegmentID?: string// [5] 1300 (String)
  TradingSessionID: string// [6] 336 (String)
  TradingSessionSubID?: string// [7] 625 (String)
  TradSesMethod?: number// [8] 338 (Int)
  TradSesMode?: number// [9] 339 (Int)
  UnsolicitedIndicator?: boolean// [10] 325 (Boolean)
  TradSesStatus: number// [11] 340 (Int)
  TradSesEvent?: number// [12] 1368 (Int)
  TradSesStatusRejReason?: number// [13] 567 (Int)
  TradSesStartTime?: Date// [14] 341 (UtcTimestamp)
  TradSesOpenTime?: Date// [15] 342 (UtcTimestamp)
  TradSesPreCloseTime?: Date// [16] 343 (UtcTimestamp)
  TradSesCloseTime?: Date// [17] 344 (UtcTimestamp)
  TradSesEndTime?: Date// [18] 345 (UtcTimestamp)
  TotalVolumeTraded?: number// [19] 387 (Float)
  Text?: string// [20] 58 (String)
  EncodedTextLen?: number// [21] 354 (Int)
  EncodedText?: Buffer// [22] 355 (RawData)
  Instrument?: IInstrument// [23] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  StandardTrailer: IStandardTrailer// [24] SignatureLength.93, Signature.89, CheckSum.10
}
