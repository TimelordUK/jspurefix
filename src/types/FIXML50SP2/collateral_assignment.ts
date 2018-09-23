import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IExecCollGrp } from './set/exec_coll_grp'
import { ITrdCollGrp } from './set/trd_coll_grp'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtCollGrp } from './set/und_instrmt_coll_grp'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { IMiscFeesGrp } from './set/misc_fees_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IStipulations } from './set/stipulations'
import { ISettlInstructionsData } from './set/settl_instructions_data'

/*
********************************************************
* CollateralAssignment can be found in Volume 5 of the *
*                                                      *
* specification                                        *
********************************************************
*/
export interface ICollateralAssignment {
  BatchID: string// 50000
  MDStatisticReqID?: string// 2452
  CollAsgnReason: number// 895
  TransferTransType: number// 2439
  EntitlementRefID?: string// 1885
  RelSymTransactTime: Date// 1504
  ExpireTime?: Date// 126
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
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  WireReference?: string// 2486
  TradeDate?: Date// 75
  TransactionID?: string// 2485
  FirmTransactionID?: string// 2484
  ClearingBusinessDate?: Date// 715
  CollateralRequestLinkID?: string// 2517
  TotNumCollateralRequests?: number// 2519
  CollateralRequestNumber?: number// 2518
  CollateralRequestInstruction?: string// 2516
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  ExecCollGrp?: IExecCollGrp[]
  TrdCollGrp?: ITrdCollGrp[]
  Instrument?: IInstrument
  FinancingDetails?: IFinancingDetails
  InstrmtLegGrp?: IInstrmtLegGrp[]
  UndInstrmtCollGrp?: IUndInstrmtCollGrp[]
  TrdRegTimestamps?: ITrdRegTimestamps[]
  MiscFeesGrp?: IMiscFeesGrp[]
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  Stipulations?: IStipulations[]
  SettlInstructionsData?: ISettlInstructionsData
}
