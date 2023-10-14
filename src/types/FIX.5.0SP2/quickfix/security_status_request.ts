import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Security Status Request message provides for the ability *
* to request the status of a security. One or more Security    *
* Status messages are returned as a result of a Security       *
* Status Request message.                                      *
****************************************************************
*/
export interface ISecurityStatusRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  SecurityStatusReqID: string// [2] 324 (String)
  Instrument: IInstrument// [3] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  InstrumentExtension?: IInstrumentExtension// [4] DeliveryForm.668, PctAtRisk.869 .. InstrAttribValue.872
  UndInstrmtGrp?: IUndInstrmtGrp// [5] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  InstrmtLegGrp?: IInstrmtLegGrp// [6] NoLegs.555, LegSymbol.600 .. LegFlowScheduleType.1440
  Currency?: string// [7] 15 (String)
  SubscriptionRequestType: string// [8] 263 (String)
  MarketID?: string// [9] 1301 (String)
  MarketSegmentID?: string// [10] 1300 (String)
  TradingSessionID?: string// [11] 336 (String)
  TradingSessionSubID?: string// [12] 625 (String)
  StandardTrailer: IStandardTrailer// [13] SignatureLength.93, Signature.89, CheckSum.10
}
