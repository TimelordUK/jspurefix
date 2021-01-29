import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The Security Status message provides for the ability to     *
* report changes in status to a security. The Security Status *
* message contains fields to indicate trading status,         *
* corporate actions, financial status of the company. The     *
* Security Status message is used by one trading entity (for  *
* instance an exchange) to report changes in the state of a   *
* security.                                                   *
***************************************************************
*/
export interface ISecurityStatus {
  StandardHeader: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  SecurityStatusReqID?: string// 324
  Instrument: IInstrument
  InstrumentExtension?: IInstrumentExtension
  UndInstrmtGrp?: IUndInstrmtGrp
  InstrmtLegGrp?: IInstrmtLegGrp
  Currency?: string// 15
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  UnsolicitedIndicator?: boolean// 325
  SecurityTradingStatus?: number// 326
  SecurityTradingEvent?: number// 1174
  FinancialStatus?: string// 291
  CorporateAction?: string// 292
  HaltReason?: number// 327
  InViewOfCommon?: boolean// 328
  DueToRelated?: boolean// 329
  MDBookType?: number// 1021
  MarketDepth?: number// 264
  BuyVolume?: number// 330
  SellVolume?: number// 331
  HighPx?: number// 332
  LowPx?: number// 333
  LastPx?: number// 31
  TransactTime?: Date// 60
  Adjustment?: number// 334
  FirstPx?: number// 1025
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
