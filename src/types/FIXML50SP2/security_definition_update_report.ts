import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IRelatedInstrumentGrp } from './set/related_instrument_grp'
import { IStipulations } from './set/stipulations'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { IMarketSegmentGrp } from './set/market_segment_grp'

/*
**************************************************************
* SecurityDefinitionUpdateReport can be found in Volume 3 of *
* the                                                        *
*                                                            *
* specification                                              *
**************************************************************
*/
export interface ISecurityDefinitionUpdateReport {
  SecurityReportID?: number// [2] 964 (Int)
  SecurityReqID?: string// [2] 320 (String)
  SecurityResponseID?: string// [2] 322 (String)
  SecurityResponseType?: number// [2] 323 (Int)
  ClearingBusinessDate?: Date// [2] 715 (LocalDate)
  SecurityUpdateAction?: string// [2] 980 (String)
  CorporateAction?: string// [2] 292 (String)
  Currency?: string// [2] 15 (String)
  PreviousAdjustedOpenInterest?: number// [2] 2572 (Float)
  PreviousUnadjustedOpenInterest?: number// [2] 2573 (Float)
  PriorSettlPrice?: number// [2] 734 (Float)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  NumOfSimpleInstruments?: number// [2] 1606 (Int)
  NumOfComplexInstruments?: number// [2] 2562 (Int)
  LastUpdateTime?: Date// [2] 779 (UtcTimestamp)
  EffectiveBusinessDate?: Date// [2] 2400 (LocalDate)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  Instrument?: IInstrument// [3] Sym.55, Sfx.65 .. ExchLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [4] DlvryForm.668, PctAtRisk.869
  FinancingDetails?: IFinancingDetails// [5] AgmtDesc.913, AgmtID.914 .. MgnRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp[]// [6] Sym.311, Sfx.312 .. XID.2631
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]// [7] InstrmtTyp.1648, Sym.1649 .. XIDRef.2417
  Stipulations?: IStipulations[]// [8] Typ.233, Val.234
  InstrmtLegGrp?: IInstrmtLegGrp[]// [9] Sym.600, Sfx.601 .. ExchLookAlike.2607
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [10] Spread.218, Ccy.220 .. SecIDSrc.761
  YieldData?: IYieldData// [11] Typ.235, Yld.236 .. RedPxTyp.698
  MarketSegmentGrp?: IMarketSegmentGrp[]// [12] MktID.1301, MktSegID.1300
}
