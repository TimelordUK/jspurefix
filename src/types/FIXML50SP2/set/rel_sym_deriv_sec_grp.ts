import { IInstrument } from './instrument'
import { ISecondaryPriceLimits } from './secondary_price_limits'
import { IInstrumentExtension } from './instrument_extension'
import { IInstrmtLegGrp } from './instrmt_leg_grp'

export interface IRelSymDerivSecGrp {
  Currency?: string// 15
  CorporateAction?: string// 292
  RelSymTransactTime?: Date// 1504
  NumOfSimpleInstruments?: number// 1606
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  Instrument?: IInstrument
  SecondaryPriceLimits?: ISecondaryPriceLimits
  InstrumentExtension?: IInstrumentExtension
  InstrmtLegGrp?: IInstrmtLegGrp[]
}
