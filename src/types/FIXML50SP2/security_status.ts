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
  OrdStatusReqID?: string// 790
  UnderlyingReturnRatePriceCurrency?: string// 43067
  SideCollateralAmountMarketID?: string// 2692
  SideCollateralAmountMarketSegmentID?: string// 2693
  TradeDate?: Date// 75
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  UnsolicitedIndicator?: string// 325
  MDSecurityTradingStatus?: number// 1682
  MarketMakerActivity?: number// 1655
  FastMarketIndicator?: string// 2447
  SecurityMassTradingEvent?: number// 1680
  NextAuctionTime?: Date// 2116
  FinancialStatus?: string// 291
  CorporateAction?: string// 292
  MDHaltReason?: number// 1684
  InViewOfCommon?: string// 328
  DueToRelated?: string// 329
  MDBookType?: number// 1021
  MarketDepth?: number// 264
  BuyVolume?: number// 330
  SellVolume?: number// 331
  HighPx?: number// 332
  LowPx?: number// 333
  LegLastPx?: number// 637
  ClearingSettlPrice?: number// 2528
  SettlPriceType?: number// 731
  SettlPriceDeterminationMethod?: number// 2451
  RelSymTransactTime?: Date// 1504
  Adjustment?: number// 334
  FirstPx?: number// 1025
  LinkageHandlingIndicator?: string// 2448
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
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
