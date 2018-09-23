import { IInstrument } from './instrument'
import { IInstrumentExtension } from './instrument_extension'
import { IFinancingDetails } from './financing_details'
import { ISecurityTradingRules } from './security_trading_rules'
import { IStrikeRules } from './strike_rules'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IStipulations } from './stipulations'
import { ISecLstUpdRelSymsLegGrp } from './sec_lst_upd_rel_syms_leg_grp'
import { IRelatedInstrumentGrp } from './related_instrument_grp'
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data'
import { IYieldData } from './yield_data'

export interface ISecLstUpdRelSymGrp {
  ListUpdateAction?: string// 1324
  UnderlyingReturnRatePriceCurrency?: string// 43067
  RelSymTransactTime?: Date// 1504
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  FinancingDetails?: IFinancingDetails
  SecurityTradingRules?: ISecurityTradingRules
  StrikeRules?: IStrikeRules[]
  UndInstrmtGrp?: IUndInstrmtGrp[]
  Stipulations?: IStipulations[]
  SecLstUpdRelSymsLegGrp?: ISecLstUpdRelSymsLegGrp[]
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  YieldData?: IYieldData
}
