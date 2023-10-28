import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IRelatedInstrumentGrp } from './set/related_instrument_grp'
import { IClearingPriceParametersGrp } from './set/clearing_price_parameters_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityStatus {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  SecurityStatusReqID?: string// [3] 324 (String)
  Instrument?: IInstrument// [4] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [5] DeliveryForm.668, PctAtRisk.869 .. ReferenceDataDateType.2748
  FinancingDetails?: IFinancingDetails// [6] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [7] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  InstrmtLegGrp?: IInstrmtLegGrp// [8] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  RelatedInstrumentGrp?: IRelatedInstrumentGrp// [9] NoRelatedInstruments.1647, RelatedInstrumentType.1648 .. RelatedToDividendPeriodXIDRef.2417
  Currency?: string// [10] 15 (String)
  CurrencyCodeSource?: string// [11] 2897 (String)
  MarketID?: string// [12] 1301 (String)
  MarketSegmentID?: string// [13] 1300 (String)
  TradeDate?: Date// [14] 75 (LocalDate)
  TradingSessionID?: string// [15] 336 (String)
  TradingSessionSubID?: string// [16] 625 (String)
  UnsolicitedIndicator?: boolean// [17] 325 (Boolean)
  SecurityTradingStatus?: number// [18] 326 (Int)
  MarketMakerActivity?: number// [19] 1655 (Int)
  FastMarketIndicator?: boolean// [20] 2447 (Boolean)
  SecurityTradingEvent?: number// [21] 1174 (Int)
  NextAuctionTime?: Date// [22] 2116 (UtcTimestamp)
  FinancialStatus?: string// [23] 291 (String)
  CorporateAction?: string// [24] 292 (String)
  HaltReasonInt?: number// [25] 327 (Int)
  InViewOfCommon?: boolean// [26] 328 (Boolean)
  DueToRelated?: boolean// [27] 329 (Boolean)
  MDBookType?: number// [28] 1021 (Int)
  MarketDepth?: number// [29] 264 (Int)
  BuyVolume?: number// [30] 330 (Float)
  SellVolume?: number// [31] 331 (Float)
  HighPx?: number// [32] 332 (Float)
  LowPx?: number// [33] 333 (Float)
  LastPx?: number// [34] 31 (Float)
  ClearingPriceParametersGrp?: IClearingPriceParametersGrp// [35] NoClearingPriceParameters.2580, BusinessDayType.2581 .. CalculationMethod.2592
  SettlPrice?: number// [36] 730 (Float)
  SettlPriceType?: number// [37] 731 (Int)
  SettlPriceDeterminationMethod?: number// [38] 2451 (Int)
  TransactTime?: Date// [39] 60 (UtcTimestamp)
  Adjustment?: number// [40] 334 (Int)
  FirstPx?: number// [41] 1025 (Float)
  LinkageHandlingIndicator?: boolean// [42] 2448 (Boolean)
  Text?: string// [43] 58 (String)
  EncodedTextLen?: number// [44] 354 (Length)
  EncodedText?: Buffer// [45] 355 (RawData)
  StandardTrailer: IStandardTrailer// [46] SignatureLength.93, Signature.89, CheckSum.10
}
