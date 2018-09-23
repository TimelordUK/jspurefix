import { IInstrument } from './instrument'
import { IInstrumentExtension } from './instrument_extension'
import { IFinancingDetails } from './financing_details'
import { IRelatedInstrumentGrp } from './related_instrument_grp'

export interface IInstrmtGrp {
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  FinancingDetails?: IFinancingDetails
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]
}
