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
  ConfirmID: string// 664
  ConfirmRefID?: string// 772
  ConfirmReqID?: string// 859
  ConfirmTransType: number// 666
  ConfirmType: number// 773
  CopyMsgIndicator?: boolean// 797
  LegalConfirm?: boolean// 650
  ConfirmStatus: number// 665
  AffirmStatus?: number// 940
  TradeConfirmationReferenceID?: string// 2390
  ClearedIndicator?: number// 1832
  AllocID?: string// 70
  SecondaryAllocID?: string// 793
  IndividualAllocID?: string// 467
  TransactTime: Date// 60
  TradeDate: Date// 75
  AllocQty: number// 80
  QtyType?: number// 854
  RelativeValueSide: number// 2532
  Currency?: string// 15
  LastMkt?: string// 30
  AllocAccount: string// 79
  AllocAcctIDSource?: number// 661
  AllocAccountType?: number// 798
  AvgPx: number// 6
  AvgPxPrecision?: number// 74
  PriceType?: number// 423
  AvgParPx?: number// 860
  ReportedPx?: number// 861
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  ProcessCode?: string// 81
  GrossTradeAmt: number// 381
  NumDaysInterest?: number// 157
  ExDate?: Date// 230
  AccruedInterestRate?: number// 158
  AccruedInterestAmt?: number// 159
  InterestAtMaturity?: number// 738
  EndAccruedInterestAmt?: number// 920
  StartCash?: number// 921
  EndCash?: number// 922
  Concession?: number// 238
  TotalTakedown?: number// 237
  NetMoney: number// 118
  MaturityNetMoney?: number// 890
  SettlCurrAmt?: number// 119
  SettlCurrency?: string// 120
  SettlCurrFxRate?: number// 155
  SettlCurrFxRateCalc?: string// 156
  InstrumentScopeSettlType?: string// 1557
  SettlDate?: Date// 64
  SharedCommission?: number// 858
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  OrdAllocGrp?: IOrdAllocGrp[]
  TrdRegTimestamps?: ITrdRegTimestamps[]
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp[]
  InstrmtLegGrp?: IInstrmtLegGrp[]
  YieldData?: IYieldData
  CpctyConfGrp?: ICpctyConfGrp[]
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  SettlInstructionsData?: ISettlInstructionsData
  CommissionData?: ICommissionData
  CommissionDataGrp?: ICommissionDataGrp[]
  Stipulations?: IStipulations[]
  MiscFeesGrp?: IMiscFeesGrp[]
}
