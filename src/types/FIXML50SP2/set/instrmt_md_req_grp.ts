import { IInstrument } from './instrument'
import { IInstrumentExtension } from './instrument_extension'
import { IFinancingDetails } from './financing_details'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IInstrmtLegGrp } from './instrmt_leg_grp'
import { IRelatedInstrumentGrp } from './related_instrument_grp'
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data'

export interface IInstrmtMDReqGrp {
  UnderlyingReturnRatePriceCurrency?: string// 43067
  UnderlyingReturnRateValuationDateType?: number// 43073
  InstrumentScopeSettlType?: string// 1557
  LegSettlDate?: Date// 588
  MDEntrySize?: number// 271
  MDStreamID?: string// 1500
  Instrument: IInstrument
  InstrumentExtension?: IInstrumentExtension
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp[]
  InstrmtLegGrp?: IInstrmtLegGrp[]
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
}
