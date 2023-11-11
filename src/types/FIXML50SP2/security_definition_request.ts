import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IRelatedInstrumentGrp } from './set/related_instrument_grp'
import { IStipulations } from './set/stipulations'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'

/*
*************************************************************
* SecurityDefinitionRequest can be found in Volume 3 of the *
*                                                           *
* specification                                             *
*************************************************************
*/
export interface ISecurityDefinitionRequest {
  SecurityReqID: string// [2] 320 (String)
  SecurityRequestType: number// [2] 321 (Int)
  MarketID?: string// [2] 1301 (String)
  MarketSegmentID?: string// [2] 1300 (String)
  Currency?: string// [2] 15 (String)
  ComplianceID?: string// [2] 376 (String)
  ComplianceText?: string// [2] 2404 (String)
  EncodedComplianceTextLen?: number// [2] 2351 (Length)
  EncodedComplianceText?: Buffer// [2] 2352 (RawData)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  TradingSessionID?: string// [2] 336 (String)
  TradingSessionSubID?: string// [2] 625 (String)
  ExpirationCycle?: number// [2] 827 (Int)
  SubscriptionRequestType?: string// [2] 263 (String)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Instrument?: IInstrument// [2] Sym.55, Sfx.65 .. ExchLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [3] DlvryForm.668, PctAtRisk.869
  FinancingDetails?: IFinancingDetails// [4] AgmtDesc.913, AgmtID.914 .. MgnRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp[]// [5] Sym.311, Sfx.312 .. XID.2631
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]// [6] InstrmtTyp.1648, Sym.1649 .. XIDRef.2417
  Stipulations?: IStipulations[]// [7] Typ.233, Val.234
  InstrmtLegGrp?: IInstrmtLegGrp[]// [8] Sym.600, Sfx.601 .. ExchLookAlike.2607
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [9] Spread.218, Ccy.220 .. SecIDSrc.761
  YieldData?: IYieldData// [10] Typ.235, Yld.236 .. RedPxTyp.698
}
