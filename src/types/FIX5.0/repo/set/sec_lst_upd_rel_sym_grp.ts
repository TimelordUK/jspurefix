import { IInstrument } from './instrument'
import { IInstrumentExtension } from './instrument_extension'
import { IFinancingDetails } from './financing_details'
import { IUnderlyingInstrument } from './underlying_instrument'
import { IStipulations } from './stipulations'
import { ISecLstUpdRelSymsLegGrp } from './sec_lst_upd_rel_syms_leg_grp'
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data'
import { IYieldData } from './yield_data'

export interface ISecLstUpdRelSymGrp {
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  FinancingDetails?: IFinancingDetails
  UnderlyingInstrument?: IUnderlyingInstrument
  Currency?: number// 15
  Stipulations?: IStipulations[]
  SecLstUpdRelSymsLegGrp?: ISecLstUpdRelSymsLegGrp[]
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  YieldData?: IYieldData
  RoundLot?: number// 561
  MinTradeVol?: number// 562
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  ExpirationCycle?: number// 827
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
}
