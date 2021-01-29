import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'

export interface ISecurityStatus {
  SecurityStatusReqID?: string// 324
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  UndInstrmtGrp?: IUndInstrmtGrp
  InstrmtLegGrp?: IInstrmtLegGrp
  Currency?: string// 15
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  UnsolicitedIndicator?: boolean// 325
  SecurityTradingStatus?: number// 326
  FinancialStatus?: string// 291
  CorporateAction?: string// 292
  HaltReasonChar?: string// 327
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
}
