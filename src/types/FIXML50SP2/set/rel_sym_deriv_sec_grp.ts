import { IInstrument } from './instrument'
import { ISecondaryPriceLimits } from './secondary_price_limits'
import { IInstrumentExtension } from './instrument_extension'
import { IInstrmtLegGrp } from './instrmt_leg_grp'

export interface IRelSymDerivSecGrp {
  UnderlyingReturnRatePriceCurrency?: string// 43067
  CorporateAction?: string// 292
  RelSymTransactTime?: Date// 1504
  NumOfSimpleInstruments?: number// 1606
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  Instrument?: IInstrument
  SecondaryPriceLimits?: ISecondaryPriceLimits
  InstrumentExtension?: IInstrumentExtension
  InstrmtLegGrp?: IInstrmtLegGrp[]
}
