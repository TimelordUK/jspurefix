import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
***********************************************************
* The Security Status message provides for the ability to *
* report changes in status to a security.                 *
***********************************************************
*/
export interface ISecurityStatus {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  SecurityStatusReqID?: string// [2] 324 (String)
  Instrument: IInstrument// [3] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  Currency?: string// [4] 15 (String)
  TradingSessionID?: string// [5] 336 (String)
  UnsolicitedIndicator?: boolean// [6] 325 (Boolean)
  SecurityTradingStatus?: number// [7] 326 (Int)
  FinancialStatus?: string// [8] 291 (String)
  CorporateAction?: string// [9] 292 (String)
  HaltReason?: string// [10] 327 (String)
  InViewOfCommon?: boolean// [11] 328 (Boolean)
  DueToRelated?: boolean// [12] 329 (Boolean)
  BuyVolume?: number// [13] 330 (Float)
  SellVolume?: number// [14] 331 (Float)
  HighPx?: number// [15] 332 (Float)
  LowPx?: number// [16] 333 (Float)
  LastPx?: number// [17] 31 (Float)
  TransactTime?: Date// [18] 60 (UtcTimestamp)
  Adjustment?: number// [19] 334 (Int)
  Text?: string// [20] 58 (String)
  EncodedTextLen?: number// [21] 354 (Int)
  EncodedText?: Buffer// [22] 355 (RawData)
  StandardTrailer: IStandardTrailer// [23] SignatureLength.93, Signature.89, CheckSum.10
}
