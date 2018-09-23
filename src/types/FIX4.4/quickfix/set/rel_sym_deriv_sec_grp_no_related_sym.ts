import { IInstrument } from './instrument'
import { IInstrumentExtension } from './instrument_extension'
import { IInstrmtLegGrp } from './instrmt_leg_grp'

export interface IRelSymDerivSecGrpNoRelatedSym {
  Instrument?: IInstrument
  Currency?: number// 15
  ExpirationCycle?: number// 827
  InstrumentExtension?: IInstrumentExtension
  InstrmtLegGrp?: IInstrmtLegGrp
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
}
