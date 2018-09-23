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
  CopyMsgIndicator?: string// 797
  LegalConfirm?: string// 650
  ConfirmStatus: number// 665
  AffirmStatus?: number// 940
  TradeConfirmationReferenceID?: string// 2390
  ClearedIndicator?: number// 1832
  AllocID?: string// 70
  SecondaryAllocID?: string// 793
  LegIndividualAllocID?: string// 672
  RelSymTransactTime: Date// 1504
  TradeDate: Date// 75
  RelatedTradeQuantity: number// 1860
  LegQtyType?: number// 1591
  RelativeValueSide: number// 2532
  UnderlyingReturnRatePriceCurrency?: string// 43067
  LastMkt?: string// 30
  LegAccount: string// 2680
  AllocAcctIDSource?: number// 661
  AllocAccountType?: number// 798
  SideAvgPx: number// 1852
  AvgPxPrecision?: number// 74
  UnderlyingReturnRatePriceType?: number// 43068
  AvgParPx?: number// 860
  ReportedPx?: number// 861
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  ProcessCode?: string// 81
  AllocGrossTradeAmt: number// 2300
  NumDaysInterest?: number// 157
  ExDate?: Date// 230
  AccruedInterestRate?: number// 158
  AllocAccruedInterestAmt?: number// 742
  AllocInterestAtMaturity?: number// 741
  EndAccruedInterestAmt?: number// 920
  StartCash?: number// 921
  EndCash?: number// 922
  Concession?: number// 238
  TotalTakedown?: number// 237
  AllocNetMoney: number// 154
  MaturityNetMoney?: number// 890
  SettlCurrAmt?: number// 119
  UnderlyingProvisionCashSettlCurrency?: string// 42167
  SettlCurrFxRate?: string// 155
  SettlCurrFxRateCalc?: string// 156
  InstrumentScopeSettlType?: string// 1557
  LegSettlDate?: Date// 588
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
