import { IInstrument } from './instrument'
import { IInstrumentExtension } from './instrument_extension'
import { IFinancingDetails } from './financing_details'
import { IRelatedInstrumentGrp } from './related_instrument_grp'

export interface IInstrmtGrpNoRelatedSym {
  Instrument?: IInstrument// [1] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [2] DeliveryForm.668, PctAtRisk.869 .. ReferenceDataDateType.2748
  FinancingDetails?: IFinancingDetails// [3] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  RelatedInstrumentGrp?: IRelatedInstrumentGrp// [4] NoRelatedInstruments.1647, RelatedInstrumentType.1648 .. RelatedToDividendPeriodXIDRef.2417
}
