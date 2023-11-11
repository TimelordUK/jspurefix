import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

export interface ITradingSessionStatus {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  TradSesReqID?: string// [3] 335 (String)
  MarketID?: string// [4] 1301 (String)
  MarketSegmentID?: string// [5] 1300 (String)
  TradeDate?: Date// [6] 75 (LocalDate)
  TradingSessionID: string// [7] 336 (String)
  TradingSessionSubID?: string// [8] 625 (String)
  TradSesMethod?: number// [9] 338 (Int)
  TradSesMode?: number// [10] 339 (Int)
  UnsolicitedIndicator?: boolean// [11] 325 (Boolean)
  TradSesStatus: number// [12] 340 (Int)
  TradSesEvent?: number// [13] 1368 (Int)
  FastMarketIndicator?: boolean// [14] 2447 (Boolean)
  TradSesStatusRejReason?: number// [15] 567 (Int)
  TradSesStartTime?: Date// [16] 341 (UtcTimestamp)
  TradSesOpenTime?: Date// [17] 342 (UtcTimestamp)
  TradSesPreCloseTime?: Date// [18] 343 (UtcTimestamp)
  TradSesCloseTime?: Date// [19] 344 (UtcTimestamp)
  TradSesEndTime?: Date// [20] 345 (UtcTimestamp)
  TradSesControl?: number// [21] 1785 (Int)
  TotalVolumeTraded?: number// [22] 387 (Float)
  TransactTime?: Date// [23] 60 (UtcTimestamp)
  Text?: string// [24] 58 (String)
  EncodedTextLen?: number// [25] 354 (Length)
  EncodedText?: Buffer// [26] 355 (RawData)
  Instrument?: IInstrument// [27] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  StandardTrailer: IStandardTrailer// [28] SignatureLength.93, Signature.89, CheckSum.10
}
