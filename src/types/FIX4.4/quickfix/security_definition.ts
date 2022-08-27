import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityDefinition {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  SecurityReqID: string// [2] 320 (String)
  SecurityResponseID: string// [3] 322 (String)
  SecurityResponseType: number// [4] 323 (Int)
  Instrument?: IInstrument// [5] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  InstrumentExtension?: IInstrumentExtension// [6] DeliveryForm.668, PctAtRisk.869 .. InstrAttribValue.872
  UndInstrmtGrp?: IUndInstrmtGrp// [7] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingStipValue.889
  Currency?: string// [8] 15 (String)
  TradingSessionID?: string// [9] 336 (String)
  TradingSessionSubID?: string// [10] 625 (String)
  Text?: string// [11] 58 (String)
  EncodedTextLen?: number// [12] 354 (Length)
  EncodedText?: Buffer// [13] 355 (RawData)
  InstrmtLegGrp?: IInstrmtLegGrp// [14] NoLegs.555, LegSymbol.600 .. LegInterestAccrualDate.956
  ExpirationCycle?: number// [15] 827 (Int)
  RoundLot?: number// [16] 561 (Float)
  MinTradeVol?: number// [17] 562 (Float)
  StandardTrailer: IStandardTrailer// [18] SignatureLength.93, Signature.89, CheckSum.10
}
