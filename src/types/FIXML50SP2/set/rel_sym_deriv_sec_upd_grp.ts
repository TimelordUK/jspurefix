import { IInstrument } from './instrument'
import { IInstrumentExtension } from './instrument_extension'
import { ISecondaryPriceLimits } from './secondary_price_limits'
import { IInstrmtLegGrp } from './instrmt_leg_grp'

export interface IRelSymDerivSecUpdGrp {
  ListUpdateAction?: string// 1324
  CorporateAction?: string// 292
  UnderlyingReturnRatePriceCurrency?: string// 43067
  RelSymTransactTime?: Date// 1504
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  SecondaryPriceLimits?: ISecondaryPriceLimits
  InstrmtLegGrp?: IInstrmtLegGrp[]
}
