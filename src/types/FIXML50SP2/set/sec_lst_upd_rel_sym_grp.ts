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
  ListUpdateAction?: string// [1] 1324 (String)
  Currency?: string// [1] 15 (String)
  RelSymTransactTime?: Date// [1] 1504 (UtcTimestamp)
  Text?: string// [1] 58 (String)
  EncodedTextLen?: number// [1] 354 (Length)
  EncodedText?: Buffer// [1] 355 (RawData)
  Instrument?: IInstrument// [1] Sym.55, Sfx.65 .. ExchLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [2] DlvryForm.668, PctAtRisk.869
  FinancingDetails?: IFinancingDetails// [3] AgmtDesc.913, AgmtID.914 .. MgnRatio.898
  SecurityTradingRules?: ISecurityTradingRules// [4] 
  StrikeRules?: IStrikeRules[]// [5] StrkRule.1223, StartStrkPxRng.1202 .. StrkExrStyle.1304
  UndInstrmtGrp?: IUndInstrmtGrp[]// [6] Sym.311, Sfx.312 .. XID.2631
  Stipulations?: IStipulations[]// [7] Typ.233, Val.234
  SecLstUpdRelSymsLegGrp?: ISecLstUpdRelSymsLegGrp[]// [8] SwapTyp.690, SettlTyp.63
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]// [9] InstrmtTyp.1648, Sym.1649 .. XIDRef.2417
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [10] Spread.218, Ccy.220 .. SecIDSrc.761
  YieldData?: IYieldData// [11] Typ.235, Yld.236 .. RedPxTyp.698
}
