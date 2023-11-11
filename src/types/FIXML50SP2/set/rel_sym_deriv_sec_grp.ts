import { IInstrument } from './instrument'
import { ISecondaryPriceLimits } from './secondary_price_limits'
import { IInstrumentExtension } from './instrument_extension'
import { IInstrmtLegGrp } from './instrmt_leg_grp'

export interface IRelSymDerivSecGrp {
  Currency?: string// [1] 15 (String)
  CorporateAction?: string// [1] 292 (String)
  RelSymTransactTime?: Date// [1] 1504 (UtcTimestamp)
  NumOfSimpleInstruments?: number// [1] 1606 (Int)
  Text?: string// [1] 58 (String)
  EncodedTextLen?: number// [1] 354 (Length)
  EncodedText?: Buffer// [1] 355 (RawData)
  Instrument?: IInstrument// [1] Sym.55, Sfx.65 .. ExchLookAlike.2603
  SecondaryPriceLimits?: ISecondaryPriceLimits// [2] PxLmtTyp.1305, LowLmtPx.1221 .. TrdgRefPx.1240
  InstrumentExtension?: IInstrumentExtension// [3] DlvryForm.668, PctAtRisk.869
  InstrmtLegGrp?: IInstrmtLegGrp[]// [4] Sym.600, Sfx.601 .. ExchLookAlike.2607
}
