import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
**********************************************************
* The Trading Session Status provides information on the *
* status of a market.                                    *
**********************************************************
*/
export interface ITradingSessionStatus {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  TradSesReqID?: string// [2] 335 (String)
  TradingSessionID: string// [3] 336 (String)
  TradSesMethod?: number// [4] 338 (Int)
  TradSesMode?: number// [5] 339 (Int)
  UnsolicitedIndicator?: boolean// [6] 325 (Boolean)
  TradSesStatus: number// [7] 340 (Int)
  TradSesStartTime?: Date// [8] 341 (UtcTimestamp)
  TradSesOpenTime?: Date// [9] 342 (UtcTimestamp)
  TradSesPreCloseTime?: Date// [10] 343 (UtcTimestamp)
  TradSesCloseTime?: Date// [11] 344 (UtcTimestamp)
  TradSesEndTime?: Date// [12] 345 (UtcTimestamp)
  TotalVolumeTraded?: number// [13] 387 (Float)
  Text?: string// [14] 58 (String)
  EncodedTextLen?: number// [15] 354 (Int)
  EncodedText?: Buffer// [16] 355 (RawData)
  StandardTrailer: IStandardTrailer// [17] SignatureLength.93, Signature.89, CheckSum.10
}
