import { IInstrument } from './instrument'
import { IInstrumentExtension } from './instrument_extension'
import { IInstrmtLegGrp } from './instrmt_leg_grp'

export interface IRelSymDerivSecGrpNoRelatedSym {
  Instrument?: IInstrument// [1] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  Currency?: string// [2] 15 (String)
  ExpirationCycle?: number// [3] 827 (Int)
  InstrumentExtension?: IInstrumentExtension// [4] DeliveryForm.668, PctAtRisk.869 .. InstrAttribValue.872
  InstrmtLegGrp?: IInstrmtLegGrp// [5] NoLegs.555, LegSymbol.600 .. LegInterestAccrualDate.956
  TradingSessionID?: string// [6] 336 (String)
  TradingSessionSubID?: string// [7] 625 (String)
  Text?: string// [8] 58 (String)
  EncodedTextLen?: number// [9] 354 (Length)
  EncodedText?: Buffer// [10] 355 (RawData)
}
