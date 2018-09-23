import { IStandardHeader } from './set/standard_header'
import { IOrdAllocGrp } from './set/ord_alloc_grp'
import { IExecAllocGrp } from './set/exec_alloc_grp'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IParties } from './set/parties'
import { IStipulations } from './set/stipulations'
import { IYieldData } from './set/yield_data'
import { IRegulatoryTradeIDGrp } from './set/regulatory_trade_id_grp'
import { IPositionAmountData } from './set/position_amount_data'
import { IAllocGrp } from './set/alloc_grp'
import { IRateSource } from './set/rate_source'

/*
****************************************************
* AllocationReport can be found in Volume 5 of the *
*                                                  *
* specification                                    *
****************************************************
*/
export interface IAllocationReport {
  MDStatisticRptID: string// 2453
  AllocID?: string// 70
  TransferTransType: number// 2439
  AllocReportRefID?: string// 795
  AllocCancReplaceReason?: number// 796
  SecondaryAllocID?: string// 793
  AllocGroupID?: string// 1730
  FirmGroupID?: string// 1728
  TransferReportType: number// 2444
  AllocStatus: number// 87
  AllocRejCode?: number// 88
  RefAllocID?: string// 72
  AllocReversalStatus?: number// 1738
  AllocIntermedReqType?: number// 808
  AllocLinkID?: string// 196
  AllocLinkType?: number// 197
  BookingRefID?: string// 466
  ClearingBusinessDate?: Date// 715
  TrdType?: number// 828
  SideTrdSubTyp?: number// 1008
  SideMultiLegReportingType?: number// 752
  AllocCustomerCapacity?: string// 993
  InputSource?: string// 979
  RndPx?: number// 991
  MessageEventSource?: string// 1011
  TradeInputDevice?: string// 579
  SideAvgPxIndicator?: number// 1853
  SideAvgPxGroupID?: string// 1854
  AllocNoOrdersType?: number// 857
  PreviouslyReported?: string// 570
  ReversalIndicator?: string// 700
  MatchType?: string// 574
  RelativeValueSide: number// 2532
  RelatedTradeQuantity: number// 1860
  LegQtyType?: number// 1591
  AllocGroupQuantity?: number// 1736
  AllocGroupRemainingQuantity?: number// 1737
  LastMkt?: string// 30
  TradeOriginationDate?: Date// 229
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  UnderlyingReturnRatePriceType?: number// 43068
  SideAvgPx: number// 1852
  AvgParPx?: number// 860
  UnderlyingReturnRatePriceCurrency?: string// 43067
  AvgPxPrecision?: number// 74
  TradeDate: Date// 75
  RelSymTransactTime?: Date// 1504
  InstrumentScopeSettlType?: string// 1557
  LegSettlDate?: Date// 588
  BookingType?: number// 775
  AllocGrossTradeAmt?: number// 2300
  Concession?: number// 238
  TotalTakedown?: number// 237
  AllocNetMoney?: number// 154
  LegPositionEffect?: string// 564
  AutoAcceptIndicator?: string// 754
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  NumDaysInterest?: number// 157
  AccruedInterestRate?: number// 158
  AllocAccruedInterestAmt?: number// 742
  TotalAccruedInterestAmt?: number// 540
  AllocInterestAtMaturity?: number// 741
  EndAccruedInterestAmt?: number// 920
  StartCash?: number// 921
  EndCash?: number// 922
  LegalConfirm?: string// 650
  CustOrderHandlingInst?: string// 1031
  OrderHandlingInstSource?: number// 1032
  TotNoAllocs?: number// 892
  LastFragment?: string// 893
  SideVenueType?: string// 1899
  AllocRefRiskLimitCheckID?: string// 2392
  AllocRefRiskLimitCheckIDType?: number// 2393
  AllocRiskLimitCheckStatus?: number// 2483
  ClearDate?: Date// 60003
  ExecutingClaimingIndicator?: number// 60002
  PostTradeType?: number// 60001
  TradeMatchID?: string// 1
  StandardHeader?: IStandardHeader
  OrdAllocGrp?: IOrdAllocGrp[]
  ExecAllocGrp?: IExecAllocGrp[]
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp[]
  InstrmtLegGrp?: IInstrmtLegGrp[]
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  Parties?: IParties[]
  Stipulations?: IStipulations[]
  YieldData?: IYieldData
  RegulatoryTradeIDGrp?: IRegulatoryTradeIDGrp[]
  PositionAmountData?: IPositionAmountData[]
  AllocGrp?: IAllocGrp[]
  RateSource?: IRateSource[]
}
