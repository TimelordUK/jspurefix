import { IInstrument } from './instrument'
import { IInstrumentExtension } from './instrument_extension'
import { IFinancingDetails } from './financing_details'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IStipulations } from './stipulations'
import { IInstrmtLegSecListGrp } from './instrmt_leg_sec_list_grp'
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data'
import { IYieldData } from './yield_data'

export interface ISecListGrpNoRelatedSym {
  Instrument?: IInstrument// [1] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  InstrumentExtension?: IInstrumentExtension// [2] DeliveryForm.668, PctAtRisk.869 .. InstrAttribValue.872
  FinancingDetails?: IFinancingDetails// [3] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [4] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingStipValue.889
  Currency?: string// [5] 15 (String)
  Stipulations?: IStipulations// [6] NoStipulations.232, StipulationType.233, StipulationValue.234
  InstrmtLegSecListGrp?: IInstrmtLegSecListGrp// [7] NoLegs.555, LegSymbol.600 .. LegBenchmarkPriceType.680
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [8] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [9] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  RoundLot?: number// [10] 561 (Float)
  MinTradeVol?: number// [11] 562 (Float)
  TradingSessionID?: string// [12] 336 (String)
  TradingSessionSubID?: string// [13] 625 (String)
  ExpirationCycle?: number// [14] 827 (Int)
  Text?: string// [15] 58 (String)
  EncodedTextLen?: number// [16] 354 (Length)
  EncodedText?: Buffer// [17] 355 (RawData)
}
