import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityListRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  SecurityReqID: string// [2] 320 (String)
  SecurityListRequestType: number// [3] 559 (Int)
  Instrument?: IInstrument// [4] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  InstrumentExtension?: IInstrumentExtension// [5] DeliveryForm.668, PctAtRisk.869 .. InstrAttribValue.872
  FinancingDetails?: IFinancingDetails// [6] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [7] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingStipValue.889
  InstrmtLegGrp?: IInstrmtLegGrp// [8] NoLegs.555, LegSymbol.600 .. LegInterestAccrualDate.956
  Currency?: string// [9] 15 (String)
  Text?: string// [10] 58 (String)
  EncodedTextLen?: number// [11] 354 (Length)
  EncodedText?: Buffer// [12] 355 (RawData)
  TradingSessionID?: string// [13] 336 (String)
  TradingSessionSubID?: string// [14] 625 (String)
  SubscriptionRequestType?: string// [15] 263 (String)
  StandardTrailer: IStandardTrailer// [16] SignatureLength.93, Signature.89, CheckSum.10
}
