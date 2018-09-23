import { IParties } from './parties'
import { IPreAllocGrp } from './pre_alloc_grp'
import { IDisplayInstruction } from './display_instruction'
import { ITrdgSesGrp } from './trdg_ses_grp'
import { IInstrument } from './instrument'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IStipulations } from './stipulations'
import { IOrderQtyData } from './order_qty_data'
import { ITriggeringInstruction } from './triggering_instruction'
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data'
import { IYieldData } from './yield_data'
import { ICommissionData } from './commission_data'
import { ICommissionDataGrp } from './commission_data_grp'
import { IPegInstructions } from './peg_instructions'
import { IDiscretionInstructions } from './discretion_instructions'
import { IStrategyParametersGrp } from './strategy_parameters_grp'

export interface IListOrdGrp {
  ClOrdID: string// 11
  SecondaryClOrdID?: string// 526
  ListSeqNo: number// 67
  ClOrdLinkID?: string// 583
  SettlInstMode?: string// 160
  TradeOriginationDate?: Date// 229
  TradeDate?: Date// 75
  LegAccount?: string// 2680
  AcctIDSource?: number// 660
  AllocAccountType?: number// 798
  DayBookingInst?: string// 589
  BookingUnit?: string// 590
  AllocID?: string// 70
  PreallocMethod?: string// 591
  InstrumentScopeSettlType?: string// 1557
  LegSettlDate?: Date// 588
  CashMargin?: string// 544
  AllocClearingFeeIndicator?: string// 1136
  AllocHandlInst?: number// 209
  ExecInst?: string// 18
  MinQty?: number// 110
  MatchIncrement?: number// 1089
  MaxPriceLevels?: number// 1090
  MaxFloor?: number// 111
  ExDestination?: string// 100
  ExDestinationIDSource?: string// 1133
  ProcessCode?: string// 81
  PrevClosePx?: number// 140
  RelativeValueSide: number// 2532
  ShortMarkingExemptIndicator?: string// 2102
  SideShortSaleExemptionReason?: number// 1690
  SideValueInd?: number// 401
  LocateReqd?: string// 114
  RelSymTransactTime?: Date// 1504
  LegQtyType?: number// 1591
  OrdType?: string// 40
  UnderlyingReturnRatePriceType?: number// 43068
  UnderlyingReturnRatePrice?: number// 43066
  PriceProtectionScope?: string// 1092
  StopPx?: number// 99
  UnderlyingReturnRatePriceCurrency?: string// 43067
  ComplianceID?: string// 376
  ComplianceText?: string// 2404
  EncodedComplianceTextLen?: string// 2351
  EncodedComplianceText?: Buffer// 2352
  SolicitedFlag?: string// 377
  IOIID?: string// 23
  QuoteID?: string// 117
  RefOrderID?: string// 1080
  RefOrderIDSource?: string// 1081
  TimeInForce?: string// 59
  EffectiveTime?: Date// 168
  ExpireDate?: Date// 432
  ExpireTime?: Date// 126
  GTBookingInst?: number// 427
  ExposureDuration?: number// 1629
  ExposureDurationUnit?: number// 1916
  OrderCapacity?: string// 528
  OrderRestrictions?: string// 529
  PreTradeAnonymity?: string// 1091
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
  LegPositionEffect?: string// 564
  CoveredOrUncovered?: number// 203
  MaxShow?: number// 210
  TargetStrategy?: number// 847
  TargetStrategyParameters?: string// 848
  ParticipationRate?: number// 849
  Designation?: string// 494
  ManualOrderIndicator?: string// 1028
  Parties?: IParties[]
  PreAllocGrp?: IPreAllocGrp[]
  DisplayInstruction?: IDisplayInstruction
  TrdgSesGrp?: ITrdgSesGrp[]
  Instrument: IInstrument
  UndInstrmtGrp?: IUndInstrmtGrp[]
  Stipulations?: IStipulations[]
  OrderQtyData: IOrderQtyData
  TriggeringInstruction?: ITriggeringInstruction
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  YieldData?: IYieldData
  CommissionData?: ICommissionData
  CommissionDataGrp?: ICommissionDataGrp[]
  PegInstructions?: IPegInstructions
  DiscretionInstructions?: IDiscretionInstructions
  StrategyParametersGrp?: IStrategyParametersGrp[]
}
