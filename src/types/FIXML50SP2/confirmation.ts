import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IOrdAllocGrp } from './set/ord_alloc_grp'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IYieldData } from './set/yield_data'
import { ICpctyConfGrp } from './set/cpcty_conf_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { ISettlInstructionsData } from './set/settl_instructions_data'
import { ICommissionData } from './set/commission_data'
import { ICommissionDataGrp } from './set/commission_data_grp'
import { IStipulations } from './set/stipulations'
import { IMiscFeesGrp } from './set/misc_fees_grp'

/*
************************************************
* Confirmation can be found in Volume 5 of the *
*                                              *
* specification                                *
************************************************
*/
export interface IConfirmation {
  ConfirmID: string// [2] 664 (String)
  ConfirmRefID?: string// [2] 772 (String)
  ConfirmReqID?: string// [2] 859 (String)
  ConfirmTransType: number// [2] 666 (Int)
  ConfirmType: number// [2] 773 (Int)
  CopyMsgIndicator?: boolean// [2] 797 (Boolean)
  LegalConfirm?: boolean// [2] 650 (Boolean)
  ConfirmStatus: number// [2] 665 (Int)
  AffirmStatus?: number// [2] 940 (Int)
  TradeConfirmationReferenceID?: string// [2] 2390 (String)
  ClearedIndicator?: number// [2] 1832 (Int)
  AllocID?: string// [2] 70 (String)
  SecondaryAllocID?: string// [2] 793 (String)
  IndividualAllocID?: string// [2] 467 (String)
  TransactTime: Date// [2] 60 (UtcTimestamp)
  TradeDate: Date// [2] 75 (LocalDate)
  AllocQty: number// [2] 80 (Float)
  QtyType?: number// [2] 854 (Int)
  Side: string// [2] 54 (String)
  Currency?: string// [2] 15 (String)
  LastMkt?: string// [2] 30 (String)
  AllocAccount: string// [2] 79 (String)
  AllocAcctIDSource?: number// [2] 661 (Int)
  AllocAccountType?: number// [2] 798 (Int)
  AvgPx: number// [2] 6 (Float)
  AvgPxPrecision?: number// [2] 74 (Int)
  PriceType?: number// [2] 423 (Int)
  AvgParPx?: number// [2] 860 (Float)
  ReportedPx?: number// [2] 861 (Float)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  ProcessCode?: string// [2] 81 (String)
  GrossTradeAmt: number// [2] 381 (Float)
  NumDaysInterest?: number// [2] 157 (Int)
  ExDate?: Date// [2] 230 (LocalDate)
  AccruedInterestRate?: number// [2] 158 (Float)
  AccruedInterestAmt?: number// [2] 159 (Float)
  InterestAtMaturity?: number// [2] 738 (Float)
  EndAccruedInterestAmt?: number// [2] 920 (Float)
  StartCash?: number// [2] 921 (Float)
  EndCash?: number// [2] 922 (Float)
  Concession?: number// [2] 238 (Float)
  TotalTakedown?: number// [2] 237 (Float)
  NetMoney: number// [2] 118 (Float)
  MaturityNetMoney?: number// [2] 890 (Float)
  SettlCurrAmt?: number// [2] 119 (Float)
  SettlCurrency?: string// [2] 120 (String)
  SettlCurrFxRate?: number// [2] 155 (Float)
  SettlCurrFxRateCalc?: string// [2] 156 (String)
  SettlType?: string// [2] 63 (String)
  SettlDate?: Date// [2] 64 (LocalDate)
  SharedCommission?: number// [2] 858 (Float)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Parties?: IParties[]// [2] ID.448, Src.447 .. Qual.2376
  OrdAllocGrp?: IOrdAllocGrp[]// [3] ClOrdID.11, OrdID.37 .. BkngQty.800
  TrdRegTimestamps?: ITrdRegTimestamps[]// [4] TS.769, Typ.770 .. InfoBrrID.1727
  Instrument?: IInstrument// [5] Sym.55, Sfx.65 .. ExchLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [6] DlvryForm.668, PctAtRisk.869
  FinancingDetails?: IFinancingDetails// [7] AgmtDesc.913, AgmtID.914 .. MgnRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp[]// [8] Sym.311, Sfx.312 .. XID.2631
  InstrmtLegGrp?: IInstrmtLegGrp[]// [9] Sym.600, Sfx.601 .. ExchLookAlike.2607
  YieldData?: IYieldData// [10] Typ.235, Yld.236 .. RedPxTyp.698
  CpctyConfGrp?: ICpctyConfGrp[]// [11] Cpcty.528, Rstctions.529, CpctyQty.863
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [12] Spread.218, Ccy.220 .. SecIDSrc.761
  SettlInstructionsData?: ISettlInstructionsData// [13] DlvryTyp.172, StandInstDbTyp.169 .. StandInstDbID.171
  CommissionData?: ICommissionData// [14] Comm.12, CommTyp.13 .. FundRenewWaiv.497
  CommissionDataGrp?: ICommissionDataGrp[]// [15] Amt.2640, Typ.2641 .. EncDesc.2652
  Stipulations?: IStipulations[]// [16] Typ.233, Val.234
  MiscFeesGrp?: IMiscFeesGrp[]// [17] Amt.137, Curr.138 .. AmtDue.2217
}
