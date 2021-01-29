import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IPreAllocGrp } from './set/pre_alloc_grp'
import { IDisplayInstruction } from './set/display_instruction'
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
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The order cancel/replace request is used to change the      *
* parameters of an existing order.                            *
* Do not use this message to cancel the remaining quantity of *
* an outstanding order, use the Order Cancel Request message  *
* for this purpose.                                           *
***************************************************************
*/
export interface IOrderCancelReplaceRequest {
  StandardHeader: IStandardHeader
  OrderID?: string// 37
  Parties?: IParties[]
  TradeOriginationDate?: Date// 229
  TradeDate?: Date// 75
  OrigClOrdID?: string// 41
  ClOrdID: string// 11
  SecondaryClOrdID?: string// 526
  ClOrdLinkID?: string// 583
  ListID?: string// 66
  OrigOrdModTime?: Date// 586
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  DayBookingInst?: string// 589
  BookingUnit?: string// 590
  PreallocMethod?: string// 591
  AllocID?: string// 70
  PreAllocGrp?: IPreAllocGrp[]
  SettlType?: string// 63
  SettlDate?: Date// 64
  CashMargin?: string// 544
  ClearingFeeIndicator?: string// 635
  HandlInst?: string// 21
  ExecInst?: string// 18
  MinQty?: number// 110
  MatchIncrement?: number// 1089
  MaxPriceLevels?: number// 1090
  DisplayInstruction?: IDisplayInstruction
  MaxFloor?: number// 111
  ExDestination?: string// 100
  ExDestinationIDSource?: string// 1133
  TrdgSesGrp?: ITrdgSesGrp[]
  Instrument: IInstrument
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp
  Side: string// 54
  TransactTime: Date// 60
  QtyType?: number// 854
  OrderQtyData: IOrderQtyData
  OrdType: string// 40
  PriceType?: number// 423
  Price?: number// 44
  PriceProtectionScope?: string// 1092
  StopPx?: number// 99
  TriggeringInstruction?: ITriggeringInstruction
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  YieldData?: IYieldData
  PegInstructions?: IPegInstructions
  DiscretionInstructions?: IDiscretionInstructions
  TargetStrategy?: number// 847
  StrategyParametersGrp?: IStrategyParametersGrp[]
  TargetStrategyParameters?: string// 848
  ParticipationRate?: number// 849
  ComplianceID?: string// 376
  SolicitedFlag?: boolean// 377
  Currency?: string// 15
  TimeInForce?: string// 59
  EffectiveTime?: Date// 168
  ExpireDate?: Date// 432
  ExpireTime?: Date// 126
  GTBookingInst?: number// 427
  CommissionData?: ICommissionData
  OrderCapacity?: string// 528
  OrderRestrictions?: string// 529
  PreTradeAnonymity?: boolean// 1091
  CustOrderCapacity?: number// 582
  ForexReq?: boolean// 121
  SettlCurrency?: string// 120
  BookingType?: number// 775
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  SettlDate2?: Date// 193
  OrderQty2?: number// 192
  Price2?: number// 640
  PositionEffect?: string// 77
  CoveredOrUncovered?: number// 203
  MaxShow?: number// 210
  LocateReqd?: boolean// 114
  CancellationRights?: string// 480
  MoneyLaunderingStatus?: string// 481
  RegistID?: string// 513
  Designation?: string// 494
  ManualOrderIndicator?: boolean// 1028
  CustDirectedOrder?: boolean// 1029
  ReceivedDeptID?: string// 1030
  CustOrderHandlingInst?: string// 1031
  OrderHandlingInstSource?: number// 1032
  TrdRegTimestamps?: ITrdRegTimestamps[]
  StandardTrailer: IStandardTrailer
}
