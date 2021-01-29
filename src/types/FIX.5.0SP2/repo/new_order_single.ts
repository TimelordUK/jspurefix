import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IPreAllocGrp } from './set/pre_alloc_grp'
import { IDisplayInstruction } from './set/display_instruction'
import { ITrdgSesGrp } from './set/trdg_ses_grp'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IStipulations } from './set/stipulations'
import { IOrderQtyData } from './set/order_qty_data'
import { ITriggeringInstruction } from './set/triggering_instruction'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { ICommissionData } from './set/commission_data'
import { IPegInstructions } from './set/peg_instructions'
import { IDiscretionInstructions } from './set/discretion_instructions'
import { IStrategyParametersGrp } from './set/strategy_parameters_grp'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The new order message type is used by institutions wishing  *
* to electronically submit securities and forex orders to a   *
* broker for execution.                                       *
* The New Order message type may also be used by institutions *
* or retail intermediaries wishing to electronically submit   *
* Collective Investment Vehicle (CIV) orders to a broker or   *
* fund manager for execution.                                 *
***************************************************************
*/
export interface INewOrderSingle {
  StandardHeader: IStandardHeader
  ClOrdID: string// 11
  SecondaryClOrdID?: string// 526
  ClOrdLinkID?: string// 583
  Parties?: IParties[]
  TradeOriginationDate?: Date// 229
  TradeDate?: Date// 75
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
  ProcessCode?: string// 81
  Instrument: IInstrument
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp
  PrevClosePx?: number// 140
  Side: string// 54
  LocateReqd?: boolean// 114
  TransactTime: Date// 60
  Stipulations?: IStipulations[]
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
  Currency?: string// 15
  ComplianceID?: string// 376
  SolicitedFlag?: boolean// 377
  IOIID?: string// 23
  QuoteID?: string// 117
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
  PegInstructions?: IPegInstructions
  DiscretionInstructions?: IDiscretionInstructions
  TargetStrategy?: number// 847
  StrategyParametersGrp?: IStrategyParametersGrp[]
  TargetStrategyParameters?: string// 848
  ParticipationRate?: number// 849
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
  RefOrderID?: string// 1080
  RefOrderIDSource?: string// 1081
  StandardTrailer: IStandardTrailer
}
