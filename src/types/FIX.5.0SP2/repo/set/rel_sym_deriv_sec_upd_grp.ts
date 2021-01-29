import { IInstrument } from './instrument'
import { IInstrumentExtension } from './instrument_extension'
import { ISecondaryPriceLimits } from './secondary_price_limits'
import { IInstrmtLegGrp } from './instrmt_leg_grp'

export interface IRelSymDerivSecUpdGrp {
  ListUpdateAction?: string// 1324
  CorporateAction?: string// 292
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  SecondaryPriceLimits?: ISecondaryPriceLimits
  Currency?: string// 15
  InstrmtLegGrp?: IInstrmtLegGrp
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  RelSymTransactTime?: Date// 1504
}
