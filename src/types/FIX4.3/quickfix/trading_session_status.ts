import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface ITradingSessionStatus {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  TradSesReqID?: string// [2] 335 (String)
  TradingSessionID: string// [3] 336 (String)
  TradingSessionSubID?: string// [4] 625 (String)
  TradSesMethod?: number// [5] 338 (Int)
  TradSesMode?: number// [6] 339 (Int)
  UnsolicitedIndicator?: boolean// [7] 325 (Boolean)
  TradSesStatus: number// [8] 340 (Int)
  TradSesStatusRejReason?: number// [9] 567 (Int)
  TradSesStartTime?: Date// [10] 341 (UtcTimestamp)
  TradSesOpenTime?: Date// [11] 342 (UtcTimestamp)
  TradSesPreCloseTime?: Date// [12] 343 (UtcTimestamp)
  TradSesCloseTime?: Date// [13] 344 (UtcTimestamp)
  TradSesEndTime?: Date// [14] 345 (UtcTimestamp)
  TotalVolumeTraded?: number// [15] 387 (Float)
  Text?: string// [16] 58 (String)
  EncodedTextLen?: number// [17] 354 (Length)
  EncodedText?: Buffer// [18] 355 (RawData)
  StandardTrailer: IStandardTrailer// [19] SignatureLength.93, Signature.89, CheckSum.10
}
