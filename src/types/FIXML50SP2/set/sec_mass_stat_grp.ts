import { IInstrument } from './instrument'
import { IInstrumentExtension } from './instrument_extension'
import { IFinancingDetails } from './financing_details'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IInstrmtLegGrp } from './instrmt_leg_grp'
import { IRelatedInstrumentGrp } from './related_instrument_grp'

export interface ISecMassStatGrp {
  SecurityTradingStatus?: number// 326
  SecurityTradingEvent?: number// 1174
  HaltReason?: number// 327
  FinancialStatus?: string// 291
  CorporateAction?: string// 292
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp[]
  InstrmtLegGrp?: IInstrmtLegGrp[]
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]
}
