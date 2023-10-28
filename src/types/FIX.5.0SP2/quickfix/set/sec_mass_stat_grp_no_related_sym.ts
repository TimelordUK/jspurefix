import { IInstrument } from './instrument'
import { IInstrumentExtension } from './instrument_extension'
import { IFinancingDetails } from './financing_details'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IInstrmtLegGrp } from './instrmt_leg_grp'
import { IRelatedInstrumentGrp } from './related_instrument_grp'

export interface ISecMassStatGrpNoRelatedSym {
  Instrument?: IInstrument// [1] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [2] DeliveryForm.668, PctAtRisk.869 .. ReferenceDataDateType.2748
  FinancingDetails?: IFinancingDetails// [3] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [4] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  InstrmtLegGrp?: IInstrmtLegGrp// [5] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  RelatedInstrumentGrp?: IRelatedInstrumentGrp// [6] NoRelatedInstruments.1647, RelatedInstrumentType.1648 .. RelatedToDividendPeriodXIDRef.2417
  SecurityTradingStatus?: number// [7] 326 (Int)
  SecurityTradingEvent?: number// [8] 1174 (Int)
  HaltReasonInt?: number// [9] 327 (Int)
  FinancialStatus?: string// [10] 291 (String)
  CorporateAction?: string// [11] 292 (String)
  Text?: string// [12] 58 (String)
  EncodedTextLen?: number// [13] 354 (Length)
  EncodedText?: Buffer// [14] 355 (RawData)
}
