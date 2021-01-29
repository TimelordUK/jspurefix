import { IInstrument } from './instrument'
import { IInstrumentExtension } from './instrument_extension'
import { IFinancingDetails } from './financing_details'
import { ISecurityTradingRules } from './security_trading_rules'
import { IStrikeRules } from './strike_rules'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IStipulations } from './stipulations'
import { IInstrmtLegSecListGrp } from './instrmt_leg_sec_list_grp'
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data'
import { IYieldData } from './yield_data'

export interface ISecListGrp {
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  FinancingDetails?: IFinancingDetails
  SecurityTradingRules?: ISecurityTradingRules
  StrikeRules?: IStrikeRules[]
  UndInstrmtGrp?: IUndInstrmtGrp
  Currency?: string// 15
  Stipulations?: IStipulations[]
  InstrmtLegSecListGrp?: IInstrmtLegSecListGrp[]
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  YieldData?: IYieldData
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  RelSymTransactTime?: Date// 1504
}
