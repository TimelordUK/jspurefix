import { IInstrument } from './instrument'
import { IInstrumentExtension } from './instrument_extension'
import { IFinancingDetails } from './financing_details'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IInstrmtLegGrp } from './instrmt_leg_grp'
import { IRelatedInstrumentGrp } from './related_instrument_grp'
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data'

export interface IInstrmtMDReqGrpNoRelatedSym {
  Instrument?: IInstrument// [1] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [2] DeliveryForm.668, PctAtRisk.869 .. ReferenceDataDateType.2748
  FinancingDetails?: IFinancingDetails// [3] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [4] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  InstrmtLegGrp?: IInstrmtLegGrp// [5] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  RelatedInstrumentGrp?: IRelatedInstrumentGrp// [6] NoRelatedInstruments.1647, RelatedInstrumentType.1648 .. RelatedToDividendPeriodXIDRef.2417
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [7] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  Currency?: string// [8] 15 (String)
  CurrencyCodeSource?: string// [9] 2897 (String)
  QuoteType?: number// [10] 537 (Int)
  SettlType?: string// [11] 63 (String)
  SettlDate?: Date// [12] 64 (LocalDate)
  MDEntrySize?: number// [13] 271 (Float)
  MDStreamID?: string// [14] 1500 (String)
}
