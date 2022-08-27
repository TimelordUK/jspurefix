import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Security Status Request message provides for the ability *
* to request the status of a security.                         *
****************************************************************
*/
export interface ISecurityStatusRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  SecurityStatusReqID: string// [2] 324 (String)
  Instrument: IInstrument// [3] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  InstrumentExtension?: IInstrumentExtension// [4] DeliveryForm.668, PctAtRisk.869 .. InstrAttribValue.872
  UndInstrmtGrp?: IUndInstrmtGrp[]// [5] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingStipValue.889
  InstrmtLegGrp?: IInstrmtLegGrp[]// [6] LegSymbol.600, LegSymbolSfx.601 .. LegInterestAccrualDate.956
  Currency?: string// [7] 15 (String)
  SubscriptionRequestType: string// [8] 263 (String)
  TradingSessionID?: string// [9] 336 (String)
  TradingSessionSubID?: string// [10] 625 (String)
  StandardTrailer: IStandardTrailer// [11] SignatureLength.93, Signature.89, CheckSum.10
}
