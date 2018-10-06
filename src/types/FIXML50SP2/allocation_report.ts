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
  AllocReportID: string// 755
  AllocID?: string// 70
  AllocTransType: string// 71
  AllocReportRefID?: string// 795
  AllocCancReplaceReason?: number// 796
  SecondaryAllocID?: string// 793
  AllocGroupID?: string// 1730
  FirmGroupID?: string// 1728
  AllocReportType: number// 794
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
  TrdSubType?: number// 829
  MultiLegReportingType?: string// 442
  CustOrderCapacity?: number// 582
  TradeInputSource?: string// 578
  RndPx?: number// 991
  MessageEventSource?: string// 1011
  TradeInputDevice?: string// 579
  AvgPxIndicator?: number// 819
  AvgPxGroupID?: string// 1731
  AllocNoOrdersType?: number// 857
  PreviouslyReported?: boolean// 570
  ReversalIndicator?: boolean// 700
  MatchType?: string// 574
  Side: string// 54
  Quantity: number// 53
  QtyType?: number// 854
  AllocGroupQuantity?: number// 1736
  AllocGroupRemainingQuantity?: number// 1737
  LastMkt?: string// 30
  TradeOriginationDate?: Date// 229
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  PriceType?: number// 423
  AvgPx: number// 6
  AvgParPx?: number// 860
  Currency?: string// 15
  AvgPxPrecision?: number// 74
  TradeDate: Date// 75
  TransactTime?: Date// 60
  SettlType?: string// 63
  SettlDate?: Date// 64
  BookingType?: number// 775
  GrossTradeAmt?: number// 381
  Concession?: number// 238
  TotalTakedown?: number// 237
  NetMoney?: number// 118
  PositionEffect?: string// 77
  AutoAcceptIndicator?: boolean// 754
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  NumDaysInterest?: number// 157
  AccruedInterestRate?: number// 158
  AccruedInterestAmt?: number// 159
  TotalAccruedInterestAmt?: number// 540
  InterestAtMaturity?: number// 738
  EndAccruedInterestAmt?: number// 920
  StartCash?: number// 921
  EndCash?: number// 922
  LegalConfirm?: boolean// 650
  CustOrderHandlingInst?: string// 1031
  OrderHandlingInstSource?: number// 1032
  TotNoAllocs?: number// 892
  LastFragment?: boolean// 893
  VenueType?: string// 1430
  RefRiskLimitCheckID?: string// 2334
  RefRiskLimitCheckIDType?: number// 2335
  RiskLimitCheckStatus?: number// 2343
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
