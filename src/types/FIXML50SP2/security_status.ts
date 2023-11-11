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
  SecurityStatusReqID?: string// [2] 324 (String)
  Currency?: string// [2] 15 (String)
  MarketID?: string// [2] 1301 (String)
  MarketSegmentID?: string// [2] 1300 (String)
  TradeDate?: Date// [2] 75 (LocalDate)
  TradingSessionID?: string// [2] 336 (String)
  TradingSessionSubID?: string// [2] 625 (String)
  UnsolicitedIndicator?: boolean// [2] 325 (Boolean)
  SecurityTradingStatus?: number// [2] 326 (Int)
  MarketMakerActivity?: number// [2] 1655 (Int)
  FastMarketIndicator?: boolean// [2] 2447 (Boolean)
  SecurityTradingEvent?: number// [2] 1174 (Int)
  NextAuctionTime?: Date// [2] 2116 (UtcTimestamp)
  FinancialStatus?: string// [2] 291 (String)
  CorporateAction?: string// [2] 292 (String)
  HaltReason?: number// [2] 327 (Int)
  InViewOfCommon?: boolean// [2] 328 (Boolean)
  DueToRelated?: boolean// [2] 329 (Boolean)
  MDBookType?: number// [2] 1021 (Int)
  MarketDepth?: number// [2] 264 (Int)
  BuyVolume?: number// [2] 330 (Float)
  SellVolume?: number// [2] 331 (Float)
  HighPx?: number// [2] 332 (Float)
  LowPx?: number// [2] 333 (Float)
  LastPx?: number// [2] 31 (Float)
  SettlPrice?: number// [2] 730 (Float)
  SettlPriceType?: number// [2] 731 (Int)
  SettlPriceDeterminationMethod?: number// [2] 2451 (Int)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  Adjustment?: number// [2] 334 (Int)
  FirstPx?: number// [2] 1025 (Float)
  LinkageHandlingIndicator?: boolean// [2] 2448 (Boolean)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  Instrument?: IInstrument// [3] Sym.55, Sfx.65 .. ExchLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [4] DlvryForm.668, PctAtRisk.869
  FinancingDetails?: IFinancingDetails// [5] AgmtDesc.913, AgmtID.914 .. MgnRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp[]// [6] Sym.311, Sfx.312 .. XID.2631
  InstrmtLegGrp?: IInstrmtLegGrp[]// [7] Sym.600, Sfx.601 .. ExchLookAlike.2607
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]// [8] InstrmtTyp.1648, Sym.1649 .. XIDRef.2417
  ClearingPriceParametersGrp?: IClearingPriceParametersGrp[]// [9] BizDayTyp.2581, ClrPxOfst.2582 .. CalcMeth.2592
}
