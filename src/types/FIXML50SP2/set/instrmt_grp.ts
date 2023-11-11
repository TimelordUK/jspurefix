import { IInstrument } from './instrument'
import { IInstrumentExtension } from './instrument_extension'
import { IFinancingDetails } from './financing_details'
import { IRelatedInstrumentGrp } from './related_instrument_grp'

export interface IInstrmtGrp {
  Instrument?: IInstrument// [1] Sym.55, Sfx.65 .. ExchLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [2] DlvryForm.668, PctAtRisk.869
  FinancingDetails?: IFinancingDetails// [3] AgmtDesc.913, AgmtID.914 .. MgnRatio.898
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]// [4] InstrmtTyp.1648, Sym.1649 .. XIDRef.2417
}
