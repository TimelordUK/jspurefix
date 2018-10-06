import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IRelatedInstrumentGrp } from './set/related_instrument_grp'
import { IClearingPriceParametersGrp } from './set/clearing_price_parameters_grp'

/*
**************************************************
* SecurityStatus can be found in Volume 3 of the *
*                                                *
* specification                                  *
**************************************************
*/
export interface ISecurityStatus {
  SecurityStatusReqID?: string// 324
  Currency?: string// 15
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  TradeDate?: Date// 75
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  UnsolicitedIndicator?: boolean// 325
  SecurityTradingStatus?: number// 326
  MarketMakerActivity?: number// 1655
  FastMarketIndicator?: boolean// 2447
  SecurityTradingEvent?: number// 1174
  NextAuctionTime?: Date// 2116
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
  SettlPrice?: number// 730
  SettlPriceType?: number// 731
  SettlPriceDeterminationMethod?: number// 2451
  TransactTime?: Date// 60
  Adjustment?: number// 334
  FirstPx?: number// 1025
  LinkageHandlingIndicator?: boolean// 2448
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp[]
  InstrmtLegGrp?: IInstrmtLegGrp[]
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]
  ClearingPriceParametersGrp?: IClearingPriceParametersGrp[]
}
