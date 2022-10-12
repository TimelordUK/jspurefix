import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityStatus {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  SecurityStatusReqID?: string// [2] 324 (String)
  Instrument?: IInstrument// [3] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  Currency?: string// [4] 15 (String)
  TradingSessionID?: string// [5] 336 (String)
  TradingSessionSubID?: string// [6] 625 (String)
  UnsolicitedIndicator?: boolean// [7] 325 (Boolean)
  SecurityTradingStatus?: number// [8] 326 (Int)
  FinancialStatus?: string// [9] 291 (String)
  CorporateAction?: string// [10] 292 (String)
  HaltReasonChar?: string// [11] 327 (String)
  InViewOfCommon?: boolean// [12] 328 (Boolean)
  DueToRelated?: boolean// [13] 329 (Boolean)
  BuyVolume?: number// [14] 330 (Float)
  SellVolume?: number// [15] 331 (Float)
  HighPx?: number// [16] 332 (Float)
  LowPx?: number// [17] 333 (Float)
  LastPx?: number// [18] 31 (Float)
  TransactTime?: Date// [19] 60 (UtcTimestamp)
  Adjustment?: number// [20] 334 (Int)
  Text?: string// [21] 58 (String)
  EncodedTextLen?: number// [22] 354 (Length)
  EncodedText?: Buffer// [23] 355 (RawData)
  StandardTrailer: IStandardTrailer// [24] SignatureLength.93, Signature.89, CheckSum.10
}
