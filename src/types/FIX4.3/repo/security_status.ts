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
  StandardHeader: IStandardHeader
  SecurityStatusReqID?: string// 324
  Instrument: IInstrument
  Currency?: number// 15
  TradingSessionID?: string// 336
  UnsolicitedIndicator?: boolean// 325
  SecurityTradingStatus?: number// 326
  FinancialStatus?: string// 291
  CorporateAction?: string// 292
  HaltReason?: string// 327
  InViewOfCommon?: boolean// 328
  DueToRelated?: boolean// 329
  BuyVolume?: number// 330
  SellVolume?: number// 331
  HighPx?: number// 332
  LowPx?: number// 333
  LastPx?: number// 31
  TransactTime?: Date// 60
  Adjustment?: number// 334
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
