import { IInstrument } from './instrument'
import { IInstrumentExtension } from './instrument_extension'
import { ISecurityClassificationGrp } from './security_classification_grp'
import { IFinancingDetails } from './financing_details'
import { ISecurityTradingRules } from './security_trading_rules'
import { IStrikeRules } from './strike_rules'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IStipulations } from './stipulations'
import { IInstrmtLegSecListGrp } from './instrmt_leg_sec_list_grp'
import { IRelatedInstrumentGrp } from './related_instrument_grp'
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data'
import { IYieldData } from './yield_data'
import { IPriceMovementGrp } from './price_movement_grp'

export interface ISecListGrp {
  Currency?: string// [1] 15 (String)
  RelSymTransactTime?: Date// [1] 1504 (UtcTimestamp)
  NumOfSimpleInstruments?: number// [1] 1606 (Int)
  Text?: string// [1] 58 (String)
  EncodedTextLen?: number// [1] 354 (Length)
  EncodedText?: Buffer// [1] 355 (RawData)
  Instrument?: IInstrument// [1] Sym.55, Sfx.65 .. ExchLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [2] DlvryForm.668, PctAtRisk.869
  SecurityClassificationGrp?: ISecurityClassificationGrp[]// [3] Rsn.1583, Val.1584
  FinancingDetails?: IFinancingDetails// [4] AgmtDesc.913, AgmtID.914 .. MgnRatio.898
  SecurityTradingRules?: ISecurityTradingRules// [5] 
  StrikeRules?: IStrikeRules[]// [6] StrkRule.1223, StartStrkPxRng.1202 .. StrkExrStyle.1304
  UndInstrmtGrp?: IUndInstrmtGrp[]// [7] Sym.311, Sfx.312 .. XID.2631
  Stipulations?: IStipulations[]// [8] Typ.233, Val.234
  InstrmtLegSecListGrp?: IInstrmtLegSecListGrp[]// [9] SwapTyp.690, SettlTyp.63
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]// [10] InstrmtTyp.1648, Sym.1649 .. XIDRef.2417
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [11] Spread.218, Ccy.220 .. SecIDSrc.761
  YieldData?: IYieldData// [12] Typ.235, Yld.236 .. RedPxTyp.698
  PriceMovementGrp?: IPriceMovementGrp[]// [13] 
}
