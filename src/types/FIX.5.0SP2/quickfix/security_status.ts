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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  SecurityStatusReqID?: string// [3] 324 (String)
  Instrument: IInstrument// [4] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  InstrumentExtension?: IInstrumentExtension// [5] DeliveryForm.668, PctAtRisk.869 .. InstrAttribValue.872
  UndInstrmtGrp?: IUndInstrmtGrp// [6] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  InstrmtLegGrp?: IInstrmtLegGrp// [7] NoLegs.555, LegSymbol.600 .. LegFlowScheduleType.1440
  Currency?: string// [8] 15 (String)
  MarketID?: string// [9] 1301 (String)
  MarketSegmentID?: string// [10] 1300 (String)
  TradingSessionID?: string// [11] 336 (String)
  TradingSessionSubID?: string// [12] 625 (String)
  UnsolicitedIndicator?: boolean// [13] 325 (Boolean)
  SecurityTradingStatus?: number// [14] 326 (Int)
  SecurityTradingEvent?: number// [15] 1174 (Int)
  FinancialStatus?: string// [16] 291 (String)
  CorporateAction?: string// [17] 292 (String)
  HaltReason?: number// [18] 327 (Int)
  InViewOfCommon?: boolean// [19] 328 (Boolean)
  DueToRelated?: boolean// [20] 329 (Boolean)
  MDBookType?: number// [21] 1021 (Int)
  MarketDepth?: number// [22] 264 (Int)
  BuyVolume?: number// [23] 330 (Float)
  SellVolume?: number// [24] 331 (Float)
  HighPx?: number// [25] 332 (Float)
  LowPx?: number// [26] 333 (Float)
  LastPx?: number// [27] 31 (Float)
  TransactTime?: Date// [28] 60 (UtcTimestamp)
  Adjustment?: number// [29] 334 (Int)
  FirstPx?: number// [30] 1025 (Float)
  Text?: string// [31] 58 (String)
  EncodedTextLen?: number// [32] 354 (Int)
  EncodedText?: Buffer// [33] 355 (RawData)
  StandardTrailer: IStandardTrailer// [34] SignatureLength.93, Signature.89, CheckSum.10
}
