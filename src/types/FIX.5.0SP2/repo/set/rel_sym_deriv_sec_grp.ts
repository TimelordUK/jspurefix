import { IInstrument } from './instrument'
import { ISecondaryPriceLimits } from './secondary_price_limits'
import { IInstrumentExtension } from './instrument_extension'
import { IInstrmtLegGrp } from './instrmt_leg_grp'

export interface IRelSymDerivSecGrp {
  Instrument?: IInstrument
  SecondaryPriceLimits?: ISecondaryPriceLimits
  Currency?: string// 15
  CorporateAction?: string// 292
  InstrumentExtension?: IInstrumentExtension
  InstrmtLegGrp?: IInstrmtLegGrp
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  RelSymTransactTime?: Date// 1504
}
