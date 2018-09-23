import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IExecCollGrp } from './set/exec_coll_grp'
import { ITrdCollGrp } from './set/trd_coll_grp'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtCollGrp } from './set/und_instrmt_coll_grp'
import { ICollateralAmountGrp } from './set/collateral_amount_grp'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { IMiscFeesGrp } from './set/misc_fees_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IStipulations } from './set/stipulations'

/*
******************************************************
* CollateralResponse can be found in Volume 5 of the *
*                                                    *
* specification                                      *
******************************************************
*/
export interface ICollateralResponse {
  CollRespID: string// 904
  BatchID?: string// 50000
  MDStatisticReqID?: string// 2452
  CollAsgnReason?: number// 895
  TransferTransType?: number// 2439
  CollAsgnRespType: number// 905
  CollRptRejectReason?: number// 2487
  RelSymTransactTime: Date// 1504
  CollApplType?: number// 1043
  FinancialStatus?: string// 291
  ClearingBusinessDate?: Date// 715
  LegAccount?: string// 2680
  AllocAccountType?: number// 798
  ClOrdID?: string// 11
  NotAffectedOrderID?: string// 1371
  NotAffSecondaryOrderID?: string// 1825
  SecondaryClOrdID?: string// 526
  LegSettlDate?: Date// 588
  RelatedTradeQuantity?: number// 1860
  LegQtyType?: number// 1591
  UnderlyingReturnRatePriceCurrency?: string// 43067
  MarginExcess?: number// 899
  TotalNetValue?: number// 900
  CashOutstanding?: number// 901
  RelativeValueSide?: number// 2532
  UnderlyingReturnRatePrice?: number// 43066
  UnderlyingReturnRatePriceType?: number// 43068
  AllocAccruedInterestAmt?: number// 742
  EndAccruedInterestAmt?: number// 920
  StartCash?: number// 921
  EndCash?: number// 922
  WireReference?: string// 2486
  TradeDate?: Date// 75
  TransactionID?: string// 2485
  FirmTransactionID?: string// 2484
  CollateralRequestLinkID?: string// 2517
  TotNumCollateralRequests?: number// 2519
  CollateralRequestNumber?: number// 2518
  CollateralRequestInstruction?: string// 2516
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  WarningText?: string// 2520
  EncodedWarningTextLen?: string// 2522
  EncodedWarningText?: Buffer// 2521
  RejectText?: string// 1328
  EncodedRejectTextLen?: string// 1664
  EncodedRejectText?: Buffer// 1665
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  ExecCollGrp?: IExecCollGrp[]
  TrdCollGrp?: ITrdCollGrp[]
  Instrument?: IInstrument
  FinancingDetails?: IFinancingDetails
  InstrmtLegGrp?: IInstrmtLegGrp[]
  UndInstrmtCollGrp?: IUndInstrmtCollGrp[]
  CollateralAmountGrp?: ICollateralAmountGrp[]
  TrdRegTimestamps?: ITrdRegTimestamps[]
  MiscFeesGrp?: IMiscFeesGrp[]
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  Stipulations?: IStipulations[]
}
