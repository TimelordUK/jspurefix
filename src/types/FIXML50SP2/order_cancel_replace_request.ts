import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'
import { IPreAllocGrp } from './set/pre_alloc_grp'
import { IValueChecksGrp } from './set/value_checks_grp'
import { IMatchingInstructions } from './set/matching_instructions'
import { IDisplayInstruction } from './set/display_instruction'
import { IDisclosureInstructionGrp } from './set/disclosure_instruction_grp'
import { ITrdgSesGrp } from './set/trdg_ses_grp'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IOrderQtyData } from './set/order_qty_data'
import { ITriggeringInstruction } from './set/triggering_instruction'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { IPegInstructions } from './set/peg_instructions'
import { IDiscretionInstructions } from './set/discretion_instructions'
import { IStrategyParametersGrp } from './set/strategy_parameters_grp'
import { ICommissionData } from './set/commission_data'
import { ICommissionDataGrp } from './set/commission_data_grp'
import { IOrderAttributeGrp } from './set/order_attribute_grp'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'

/*
*************************************************************
* OrderCancelReplaceRequest can be found in Volume 4 of the *
*                                                           *
* specification                                             *
*************************************************************
*/
export interface IOrderCancelReplaceRequest {
  NotAffectedOrderID?: string// 1371
  OrderRequestID?: number// 2422
  TradeOriginationDate?: Date// 229
  TradeDate?: Date// 75
  OrigClOrdID?: string// 41
  ClOrdID: string// 11
  SecondaryClOrdID?: string// 526
  ClOrdLinkID?: string// 583
  SecurityListID?: string// 1465
  OrigOrdModTime?: Date// 586
  LegAccount?: string// 2680
  AcctIDSource?: number// 660
  AllocAccountType?: number// 798
  DayBookingInst?: string// 589
  BookingUnit?: string// 590
  PreallocMethod?: string// 591
  AllocID?: string// 70
  InstrumentScopeSettlType?: string// 1557
  LegSettlDate?: Date// 588
  CashMargin?: string// 544
  AllocClearingFeeIndicator?: string// 1136
  AllocHandlInst?: number// 209
  ExecInst?: string// 18
  AuctionInstruction?: number// 1805
  MinQty?: number// 110
  MinQtyMethod?: number// 1822
  MatchIncrement?: number// 1089
  MaxPriceLevels?: number// 1090
  MaximumPricePercentage?: number// 2676
  SelfMatchPreventionID?: string// 2362
  MaxFloor?: number// 111
  SideCollateralAmountMarketSegmentID?: string// 2693
  ExDestination?: string// 100
  ExDestinationIDSource?: string// 1133
  ExDestinationType?: number// 2704
  RelativeValueSide: number// 2532
  ShortMarkingExemptIndicator?: string// 2102
  SideShortSaleExemptionReason?: number// 1690
  RelSymTransactTime: Date// 1504
  LegQtyType?: number// 1591
  OrdType: string// 40
  UnderlyingReturnRatePriceType?: number// 43068
  UnderlyingReturnRatePrice?: number// 43066
  PriceProtectionScope?: string// 1092
  StopPx?: number// 99
  TargetStrategy?: number// 847
  TargetStrategyParameters?: string// 848
  ParticipationRate?: number// 849
  ComplianceID?: string// 376
  ComplianceText?: string// 2404
  EncodedComplianceTextLen?: string// 2351
  EncodedComplianceText?: Buffer// 2352
  SolicitedFlag?: string// 377
  UnderlyingReturnRatePriceCurrency?: string// 43067
  TimeInForce?: string// 59
  EffectiveTime?: Date// 168
  ExpireDate?: Date// 432
  ExpireTime?: Date// 126
  GTBookingInst?: number// 427
  ExposureDuration?: number// 1629
  ExposureDurationUnit?: number// 1916
  OrderCapacity?: string// 528
  OrderRestrictions?: string// 529
  TradingCapacity?: number// 1815
  PreTradeAnonymity?: string// 1091
  TradePublishIndicator?: number// 1390
  AllocCustomerCapacity?: string// 993
  ForexReq?: string// 121
  UnderlyingProvisionCashSettlCurrency?: string// 42167
  BookingType?: number// 775
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  SettlDate2?: Date// 193
  OrderQty2?: number// 192
  Price2?: number// 640
  LegClearingAccountType?: number// 1817
  LegPositionEffect?: string// 564
  CoveredOrUncovered?: number// 203
  MaxShow?: number// 210
  LocateReqd?: string// 114
  CancellationRights?: string// 480
  MoneyLaunderingStatus?: string// 481
  RegistID?: string// 513
  Designation?: string// 494
  ManualOrderIndicator?: string// 1028
  CustDirectedOrder?: string// 1029
  ReceivedDeptID?: string// 1030
  CustOrderHandlingInst?: string// 1031
  OrderHandlingInstSource?: number// 1032
  OrderOrigination?: number// 1724
  OriginatingDeptID?: string// 1725
  ReceivingDeptID?: string// 1726
  OwnerType?: number// 522
  OrderOwnershipIndicator?: number// 2679
  ThrottleInst?: number// 1685
  AuctionType?: number// 1803
  AuctionAllocationPct?: number// 1804
  ReleaseInstruction?: number// 1810
  ReleaseQty?: number// 1811
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  TargetParties?: ITargetParties[]
  PreAllocGrp?: IPreAllocGrp[]
  ValueChecksGrp?: IValueChecksGrp[]
  MatchingInstructions?: IMatchingInstructions[]
  DisplayInstruction?: IDisplayInstruction
  DisclosureInstructionGrp?: IDisclosureInstructionGrp[]
  TrdgSesGrp?: ITrdgSesGrp[]
  Instrument?: IInstrument
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp[]
  OrderQtyData?: IOrderQtyData
  TriggeringInstruction?: ITriggeringInstruction
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  YieldData?: IYieldData
  PegInstructions?: IPegInstructions
  DiscretionInstructions?: IDiscretionInstructions
  StrategyParametersGrp?: IStrategyParametersGrp[]
  CommissionData?: ICommissionData
  CommissionDataGrp?: ICommissionDataGrp[]
  OrderAttributeGrp?: IOrderAttributeGrp[]
  TrdRegTimestamps?: ITrdRegTimestamps[]
}
