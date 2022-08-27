import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityStatus {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  SecurityStatusReqID?: string// [2] 324 (String)
  Instrument?: IInstrument// [3] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  InstrumentExtension?: IInstrumentExtension// [4] DeliveryForm.668, PctAtRisk.869 .. InstrAttribValue.872
  UndInstrmtGrp?: IUndInstrmtGrp// [5] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingStipValue.889
  InstrmtLegGrp?: IInstrmtLegGrp// [6] NoLegs.555, LegSymbol.600 .. LegInterestAccrualDate.956
  Currency?: string// [7] 15 (String)
  TradingSessionID?: string// [8] 336 (String)
  TradingSessionSubID?: string// [9] 625 (String)
  UnsolicitedIndicator?: boolean// [10] 325 (Boolean)
  SecurityTradingStatus?: number// [11] 326 (Int)
  FinancialStatus?: string// [12] 291 (String)
  CorporateAction?: string// [13] 292 (String)
  HaltReasonChar?: string// [14] 327 (String)
  InViewOfCommon?: boolean// [15] 328 (Boolean)
  DueToRelated?: boolean// [16] 329 (Boolean)
  BuyVolume?: number// [17] 330 (Float)
  SellVolume?: number// [18] 331 (Float)
  HighPx?: number// [19] 332 (Float)
  LowPx?: number// [20] 333 (Float)
  LastPx?: number// [21] 31 (Float)
  TransactTime?: Date// [22] 60 (UtcTimestamp)
  Adjustment?: number// [23] 334 (Int)
  Text?: string// [24] 58 (String)
  EncodedTextLen?: number// [25] 354 (Length)
  EncodedText?: Buffer// [26] 355 (RawData)
  StandardTrailer: IStandardTrailer// [27] SignatureLength.93, Signature.89, CheckSum.10
}
